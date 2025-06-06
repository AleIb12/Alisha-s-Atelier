"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export interface ContactFormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
}

export async function submitContactForm(
  prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
      success: false,
    };
  }

  // Simulate sending email
  console.log("Contact form data submitted:", validatedFields.data);

  // In a real application, you would integrate an email sending service here.
  // For example, using Resend, SendGrid, or Nodemailer with an SMTP server.

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate potential server error (uncomment to test error state)
  // if (Math.random() > 0.5) {
  //   return {
  //     message: "An unexpected error occurred. Please try again later.",
  //     success: false,
  //   };
  // }

  return {
    message: `Thank you, ${validatedFields.data.name}! Your message has been sent. Alisha will get back to you soon.`,
    success: true,
  };
}
