import { z } from "zod";
import { SendMessageFormSchema } from "./schema";

export type SendMessageData = {
  message: string;
  username: string;
  email: string;
  phoneNumber?: string;
  location?: string;
};

export type ProjectCardProps = {
  title: string;
  path: string;
  images: string[];
  liveHref: string;
  technologies: string[];
};
export type SendMessageFormSchemaType = z.infer<typeof SendMessageFormSchema>;
