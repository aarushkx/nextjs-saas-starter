import { resend } from "@/lib/resend";
import WelcomeEmail from "@/emails/welcome-email";
import { APP_NAME } from "@/lib/constants";

export const sendWelcomeEmail = async (email: string, firstName: string) => {
    try {
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
            to: email, // Use `delivered@resend.dev` for testing
            subject: `Welcome to ${APP_NAME}!`,
            react: WelcomeEmail({ name: firstName }),
        });
        return {
            success: true,
            message: "Welcome email sent successfully",
        };
    } catch (error) {
        console.error("Error sending welcome email:", error);
        return {
            success: false,
            message: "Failed to send welcome email",
        };
    }
};
