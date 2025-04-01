"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import axios from "axios";

const FormSchema = z.object({
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

export type SendMessageData = {
  message: string;
  username: string;
  email: string;
  phoneNumber?: string;
  location?: string;
};

function deleteCookie(name: string) {
  window.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

function getCookie(name: string): string | null {
  const cookies = window.document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return JSON.parse(value)
    }
  }
  return null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  window.document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
}

function SendMeMessageForm() {

  const [saveMyDetails, isSaveMyDetails] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  

  function handleSaveDetails(data: SendMessageData) {
    setCookie("userEmail", JSON.stringify(data.email), 365 * 24 * 60 * 60);
    setCookie("userName", JSON.stringify(data.username), 365 * 24 * 60 * 60);
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: getCookie("userName") || "",
      email: getCookie("userEmail") || ""
    }
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    isLoading(true);

    console.log(saveMyDetails);
    if (saveMyDetails) {
      handleSaveDetails(data);
    } else {
      deleteCookie("userEmail");
      deleteCookie("userName");
    }

    try {
      const response = await axios.post("/api/send_message", data);
      console.log(response.data);
      toast.success("Your message has been sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Your message didn't send. Please try again later.");
    } finally {
      isLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full gap-6"
      >
       <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    {...field}
                    className="w-full h-10"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="w-full h-10"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Phone"
                    {...field}
                    className="w-full h-10"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Location"
                    {...field}
                    className="w-full h-10"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
       </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center space-x-2">
          <Checkbox
            checked={saveMyDetails} 
            onCheckedChange={(checked) => isSaveMyDetails(checked === true)}
            id="save"
            title="Save details"
          />

          <label
            htmlFor="save"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Save my name and email in this browser for the next time.
          </label>
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}

export default SendMeMessageForm;
