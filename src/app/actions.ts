"use server";

import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, { message: "Namn måste vara minst 2 tecken." }),
  email: z.string().email({ message: "Vänligen ange en giltig e-postadress." }),
  phone: z.string().optional(),
  service: z.string().trim().min(1, { message: "Vänligen välj en tjänst." }),
  message: z
    .string()
    .min(10, { message: "Meddelande måste vara minst 10 tecken." }),
});
type Inquiry = z.infer<typeof inquirySchema>;

export async function submitInquiry(data: Inquiry) {
  const validatedFields = inquirySchema.safeParse(data);

  if (!validatedFields.success) {
    // This approach is simplified for demo purposes.
    // In a real app, you might return detailed field errors.
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      success: false,
      message: firstError || 'Formuläret innehåller fel.',
    };
  }

  // Here you would typically send an email, save to a database, or call an external API.
  // For this example, we'll just log the data to the server console.
  console.log('New inquiry received:', validatedFields.data);

  return { success: true, message: 'Tack för din förfrågan! Vi återkommer till dig inom kort.' };
}