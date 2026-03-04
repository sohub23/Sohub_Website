const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'sohub.web@gmail.com',
        pass: 'kjaj ghzt shff anhs',
    },
});

exports.handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ success: false, error: 'Method not allowed' }) };
    }

    try {
        const params = new URLSearchParams(event.body);
        const to = params.get('to');
        const subject = params.get('subject');
        const message = params.get('message');
        const fromName = params.get('from_name') || 'SOHUB';
        const replyTo = params.get('reply_to') || '';

        if (!to || !subject || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ success: false, error: 'Missing required fields' }),
            };
        }

        const mailOptions = {
            from: `"${fromName}" <sohub.web@gmail.com>`,
            to,
            subject,
            html: message,
            text: message.replace(/<[^>]*>/g, ''),
        };

        if (replyTo) {
            mailOptions.replyTo = replyTo;
        }

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error('Email error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ success: false, error: error.message }),
        };
    }
};
