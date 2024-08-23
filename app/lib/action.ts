"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { services } from "./data";

export type ContactState = {
  errors?: {
    fullname?: string[];
    email?: string[];
    phonenumber?: string[];
    message?: string[];
  };
  message?: string | null;
};
export type BookingState = {
  errors?: {
    fullname?: string[];
    email?: string[];
    phonenumber?: string[];
    services?: string[];
    datetime?: string[];
  };
  message?: string | null;
};
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
type Service = {
  name: string;
  id: string;
};
const possibleServices = services.map((service) => service.name);
const contactSchema = z.object({
  fullName: z
    .string({
      invalid_type_error: "Please enter full name.",
    })
    .min(5),
  email: z
    .string({
      invalid_type_error: "Please enter a valid email.",
    })
    .email()
    .min(5),
  phoneNumber: z
    .string({
      invalid_type_error: "Please enter a valid phone number.",
    })
    .min(5, "must be at least 9 digit")
    .regex(phoneRegex, "Invalid Number!"),
  contactMessage: z
    .string({
      invalid_type_error: "Please enter message.",
    })
    .min(10, "must be at least 10 character"),
});
const bookingSchema = z.object({
  fullName: z
    .string({
      invalid_type_error: "Please enter full name.",
    })
    .min(5),
  email: z
    .string({
      invalid_type_error: "Please enter a valid email.",
    })
    .email()
    .min(5),
  phoneNumber: z
    .string({
      invalid_type_error: "Please enter a valid phone number.",
    })
    .min(5, "must be at least 9 digit")
    .regex(phoneRegex, "Invalid Number!"),
  services: z.enum(possibleServices as [string, ...string[]], {
    invalid_type_error: "Please select a service",
  })
  .array()
  .min(1, { message: 'At least one service must be selected' })
  .max(5, { message: 'No more than 5 services can be selected' }),
  dateTime: z.string({
    invalid_type_error: "Please select a date and time.",
  }),
});
export async function contactData(prevSate: ContactState, formData: FormData) {
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
    console.log("form data:", formEntries);

    return { message: "Form  submitted successfully" };
  } catch (e) {
    console.log("message:", "Failed to submit");
    return { message: "Failed to submit form" };
  }
}

export async function bookingData(prevSate: BookingState, formData: FormData) {
  const parse = bookingSchema.safeParse({
    fullName: formData.get("fullname"),
    email: formData.get("email"),
    phoneNumber: formData.get("phonenumber"),
    services: formData.get("services"),
    dateTime: formData.get("datetime"),
  });

  if (!parse.success) {
    console.log("Failed to prase", parse.error.flatten().fieldErrors);
    console.log("services:", formData.get("services") )
    return {
      errors: parse.error.flatten().fieldErrors,
      message: "Something went wrong!",
    };
  }

  const data = parse.data;
  const formEntries = {
    "full name": data.fullName,
    "email": data.email,
    "phone number": data.phoneNumber,
    "services": data.services,
    "date time": data.dateTime
  };
  try {
    
    console.log("booking data:", formEntries);

    return { message: "Booking submitted successfully" };
  } catch (e) {
    console.log("message:", "Failed to submit");
    return { message: "Failed to submit booking" };
  }
}
