<?php
/**
 * SOHUB Mailer — Standalone PHP SMTP Socket Edition
 * No Composer, No Plugins, No mail() function required.
 * Connects directly to Gmail SMTP using a raw TCP socket.
 */

// Error logging for debugging
error_reporting(E_ALL);
ini_set('display_errors', 0); // Hide errors from response
ini_set('log_errors', 1);

// ─── CORS Headers ───
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use POST.']);
    exit;
}

// ─── SMTP Credentials (Hardcoded) ───
$smtp_host = 'smtp.gmail.com';
$smtp_port = 587;
$smtp_user = 'sohub.web@gmail.com';
$smtp_pass = 'kjaj ghzt shff anhs';

// ─── Parse Input Data ───
$to = $_POST['to'] ?? '';
$cc = $_POST['cc'] ?? '';
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING) ?: 'Message from SOHUB';
$message = $_POST['message'] ?? '';
$from_name = filter_input(INPUT_POST, 'from_name', FILTER_SANITIZE_STRING) ?: 'SOHUB';
$reply_to = $_POST['reply_to'] ?? '';

// Parse TO emails
$to_emails = [];
if (!empty($to)) {
    $to_list = explode(',', $to);
    foreach ($to_list as $email) {
        $email = trim($email);
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $to_emails[] = $email;
        }
    }
}

if (empty($to_emails)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'No valid recipient (to) emails provided']);
    exit;
}

if (empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Message is required']);
    exit;
}

try {
    // Create socket connection
    $socket = stream_socket_client("tcp://$smtp_host:$smtp_port", $errno, $errstr, 15);
    
    if (!$socket) {
        throw new Exception("Could not connect to SMTP server: $errstr ($errno)");
    }
    
    // Read initial response
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '220') {
        throw new Exception("SMTP Error: $response");
    }
    
    // Send EHLO
    fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
    // Read all EHLO responses
    do {
        $response = fgets($socket, 515);
    } while (substr($response, 3, 1) === '-');
    
    // Start TLS
    fputs($socket, "STARTTLS\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '220') {
        throw new Exception("STARTTLS failed: $response");
    }
    
    // Enable crypto
    if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
        throw new Exception("Failed to enable TLS encryption");
    }
    
    // Send EHLO again after TLS
    fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
    // Read all EHLO responses after TLS
    do {
        $response = fgets($socket, 515);
    } while (substr($response, 3, 1) === '-');
    
    // Authenticate
    fputs($socket, "AUTH LOGIN\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '334') {
        throw new Exception("AUTH LOGIN failed: $response");
    }
    
    fputs($socket, base64_encode($smtp_user) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '334') {
        throw new Exception("Username authentication failed: $response");
    }
    
    fputs($socket, base64_encode($smtp_pass) . "\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '235') {
        throw new Exception("Password authentication failed"); // Don't expose password error
    }
    
    // Send email
    fputs($socket, "MAIL FROM: <$smtp_user>\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '250') {
        throw new Exception("MAIL FROM failed: $response");
    }
    
    // Add all TO recipients
    foreach ($to_emails as $email) {
        fputs($socket, "RCPT TO: <$email>\r\n");
        $response = fgets($socket, 515);
        if (substr($response, 0, 3) !== '250') {
            throw new Exception("RCPT TO failed for $email: $response");
        }
    }
    
    fputs($socket, "DATA\r\n");
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '354') {
        throw new Exception("DATA command failed: $response");
    }
    
    // Email headers and body
    $email_content = "From: =?UTF-8?B?" . base64_encode($from_name) . "?= <$smtp_user>\r\n";
    $email_content .= "To: " . implode(', ', $to_emails) . "\r\n";
    
    if (!empty($reply_to) && filter_var($reply_to, FILTER_VALIDATE_EMAIL)) {
        $email_content .= "Reply-To: $reply_to\r\n";
    }

    $email_content .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $email_content .= "MIME-Version: 1.0\r\n";
    $email_content .= "Content-Type: text/html; charset=UTF-8\r\n";
    $email_content .= "\r\n";
    $email_content .= $message;
    $email_content .= "\r\n.\r\n";
    
    fputs($socket, $email_content);
    $response = fgets($socket, 515);
    if (substr($response, 0, 3) !== '250') {
        throw new Exception("Email sending failed after DATA: $response");
    }
    
    // Quit
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully',
        'to' => $to_emails
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    error_log("SMTP Error: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email: ' . $e->getMessage()
    ]);
}
?>
