import * as React from 'react';

interface EmailTemplateProps {
  userName: string;
  otp: string;
}

export const VerificationEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  userName,
  otp
}) => (
  <div>
    <h1>Welcome, {userName}!</h1>
    <h3>This is your verification code: {otp}</h3>
  </div>
);