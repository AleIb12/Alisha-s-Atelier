// EmailJS Configuration
// Get your credentials from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS Public Key or use environment variables
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE',
  
  // Replace with your EmailJS Service ID or use environment variables
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE',
  
  // Replace with your EmailJS Template ID or use environment variables
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_HERE',
};

// Template variables that will be sent to EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
  reply_to: string;
}
