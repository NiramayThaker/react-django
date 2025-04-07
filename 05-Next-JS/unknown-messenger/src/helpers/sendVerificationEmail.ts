import React from "react";
import { resend } from "@/lib/resend";
import { VerificationEmail } from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email ,
            subject: 'Verification Code',
            react:  React.createElement(VerificationEmail, { userName: username, otp: verifyCode })
        });
        return {success: true, message: "Email send successfully"};        
    } catch (emailError) {
        console.log("Error sending verification email", emailError);
        return {success: false, message: "Fail to send email"};
    }
}
