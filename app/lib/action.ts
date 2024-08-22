"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export type State = {
  errors?: {
    fullname?: string[];
    email?: string[];
    phonenumber?: string[];
    message?: string[];
  };
  message?: string | null;
};
const contactSchema = z.object({
  fullName: z
    .string({
      invalid_type_error: "Please enter full name.",
    })
    .min(5),
  email: z
    .string({
      invalid_type_error: "Please enter email.",
    })
    .email()
    .min(5),
  phoneNumber: z
    .string({
      invalid_type_error: "Please enter phone number.",
    })
    .min(5),
  contactMessage: z
    .string({
      invalid_type_error: "Please enter message.",
    })
    .min(10),
});
export async function contactData(prevSate: State, formData: FormData) {

  const parse = contactSchema.safeParse({
    fullName: formData.get("fullname"),
    email: formData.get("email"),
    phoneNumber: formData.get("phonenumber"),
    contactMessage: formData.get("message"),
  });

  if (!parse.success) {
    console.log("Failed to prase", parse.error.flatten().fieldErrors);
    return {
      errors: parse.error.flatten().fieldErrors,
      message: "Something went wrong!",
    };
  }

  const data = parse.data;
  const formEntries = {
    "full name": data.fullName,
    email: data.email,
    "phone number": data.phoneNumber,
    message: data.contactMessage,
  };
  try {
    // revalidatePath("/");
    console.log("form data:", formEntries);
    
    // return { message: `Added form data` };
  } catch (e) {
    console.log("message:", "Failed to submit");
    return { message: "Failed to submit form" };
  }
  revalidatePath("/");
  redirect("/");
}
