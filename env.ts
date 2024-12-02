export const NEXT_PUBLIC_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
export const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
export const NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

if (!NEXT_PUBLIC_EMAILJS_SERVICE_ID || !NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    throw new Error("EmailJS environment variables are not set")

namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
        NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
    }
}