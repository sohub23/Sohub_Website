<?php
/**
 * SOHUB SMTP Mailer — PHPMailer Backend
 * Host this file on ximpul.com server
 * Requires: composer require phpmailer/phpmailer
 */

// CORS Headers — allow requests from any SOHUB site
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Load PHPMailer
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// ─── SMTP Configuration ───────────────────────────
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'sohub.web@gmail.com');
define('SMTP_PASS', 'kjaj ghzt shff anhs');
define('SMTP_FROM_EMAIL', 'sohub.web@gmail.com');
define('SMTP_FROM_NAME', 'SOHUB');

// ─── Parse Input ──────────────────────────────────
$to = $_POST['to'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';
$fromName = $_POST['from_name'] ?? 'SOHUB';
$replyTo = $_POST['reply_to'] ?? '';

// Validate required fields
if (empty($to) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Missing required fields: to, subject, message'
    ]);
    exit;
}

// ─── Send Email ───────────────────────────────────
function sendMail($to, $subject, $htmlBody, $fromName, $replyTo = '') {
    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;
        $mail->CharSet    = 'UTF-8';

        // From / To
        $mail->setFrom(SMTP_FROM_EMAIL, $fromName);
        $mail->addAddress($to);

        // Reply-To (so admin can reply directly to customer)
        if (!empty($replyTo)) {
            $mail->addReplyTo($replyTo);
        }

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $htmlBody));

        $mail->send();
        return ['success' => true];
    } catch (Exception $e) {
        return ['success' => false, 'error' => $mail->ErrorInfo];
    }
}

$result = sendMail($to, $subject, $message, $fromName, $replyTo);

http_response_code($result['success'] ? 200 : 500);
echo json_encode($result);
