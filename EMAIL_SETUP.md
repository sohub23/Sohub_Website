# Email Configuration

## Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your SMTP credentials:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
```

## Gmail App Password

For Gmail, you need to create an App Password:
1. Go to Google Account Settings
2. Security → 2-Step Verification
3. App passwords → Generate new password
4. Use that password in `SMTP_PASS`

## Security

- Never commit `.env` file to git
- `.env` is already in `.gitignore`
- Use `.env.example` as template only
