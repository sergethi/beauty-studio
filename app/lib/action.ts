"use server";
import { z } from "zod";
import DOMPurify from "isomorphic-dompurify";


//Sanitize function
function sanitizeInput(input: string) {
  return DOMPurify.sanitize(input);
}

export type ContactState = {
  errors?: {
    fullname?: string[];
    email?: string[];
    phonenumber?: string[];
    services?: string[];
    message?: string[];
  };
  message: string;
};
export type BookingState = {
  errors?: {
    fullname?: string[];
    email?: string[];
    phonenumber?: string[];
    services?: string[];
    stylists?: string[];
    datetime?: string[];
    message?: string[];
  };
  message: string;
};
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

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
    services: z.string().array(),
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
  services: z.string().array().min(1, { message: 'At least one service must be selected' }),
  stylists: z.string().array(),
  dateTime: z.string({
    invalid_type_error: "Please select a date and time.",
  }),
  bookMessage: z
    .string()
});
export async function contactData(prevState: ContactState, formData: FormData) {
  const parse = contactSchema.safeParse({
    fullName: sanitizeInput(formData.get("fullname") as string),
    email: sanitizeInput(formData.get("email") as string),
    phoneNumber: sanitizeInput(formData.get("phonenumber") as string),
    services: formData.getAll("services"),
    contactMessage: sanitizeInput(formData.get("message") as string),
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
    "services": data.services,
    message: data.contactMessage,
  };
  try {
    console.log("form data:", formEntries);

    return { message: "Form submitted successfully" };
  } catch (e) {
    console.log("message:", "Failed to submit");
    return { message: "Failed to submit form" };
  }
}

export async function bookingData(prevState: BookingState, formData: FormData) {
  console.log("data:", formData)
  const parse = bookingSchema.safeParse({
    fullName: sanitizeInput(formData.get("fullname") as string),
    email: sanitizeInput(formData.get("email") as string),
    phoneNumber: sanitizeInput(formData.get("phonenumber") as string),
    services: formData.getAll("services"),
    stylists: formData.getAll("stylists"),
    dateTime: formData.get("datetime"),
    bookMessage: sanitizeInput(formData.get("message") as string),
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
    "email": data.email,
    "phone number": data.phoneNumber,
    "services": data.services,
    "stylists": data.stylists,
    "date time": data.dateTime,
    "optional message": data.bookMessage,
  };
  try {
    
    console.log("booking data:", formEntries);

    return { message: "Booking submitted successfully" };
  } catch (e) {
    console.log("message:", "Failed to submit");
    return { message: "Failed to submit booking" };
  }
}
