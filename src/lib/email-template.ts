import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from './emailjs-config';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send email using EmailJS
export const sendEmail = async (templateParams: EmailTemplateParams): Promise<boolean> => {
  try {
    // Initialize EmailJS if not already done
    initEmailJS();
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    console.log('✅ Email sent successfully:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return false;
  }
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Create email template parameters
export const createEmailParams = (
  name: string,
  email: string,
  message: string
): EmailTemplateParams => ({
  from_name: name,
  from_email: email,
  message: message,
  to_email: 'ibarrabelloalisha@gmail.com',
  reply_to: email,
});