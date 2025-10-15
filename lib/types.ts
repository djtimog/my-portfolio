import { z } from "zod";
import { SendMessageFormSchema } from "./schema";

export type SendMessageData = {
  message: string;
  username: string;
  email: string;
  phoneNumber?: string;
  location?: string;
};

export type Project = {
  title: string;
  overview: string;
  client: string;
  services: string;
  role: string;
  technologies: string[];
  features: string[];
  images: string[];
  liveHref: string;
  githubHref: string;
  path: string;
};
export type SendMessageFormSchemaType = z.infer<typeof SendMessageFormSchema>;
