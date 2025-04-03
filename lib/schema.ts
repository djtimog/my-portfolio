import { z } from "zod";

export const SendMessageFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    phoneNumber: z.string().min(7).max(15).optional(),
    location: z.string().min(10).optional(),
    message: z.string().min(5, {
      message: "Message should be at least 5 characters.",
    }),
  });