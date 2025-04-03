"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { useEffect, useState } from "react";
import axios from "axios";
import { SendMessageData, SendMessageFormSchemaType } from "@/lib/types";
import { SendMessageFormSchema } from "@/lib/schema";
import { deleteCookie, getCookie, setCookie } from "@/lib/cookies";

function SendMeMessageForm() {
  const [saveMyDetails, isSaveMyDetails] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState({
    username: "",
    email: "",
  });
  

  function handleSaveDetails(data: SendMessageData) {
    setCookie("userEmail", JSON.stringify(data.email), 365 * 24 * 60 * 60);
    setCookie("userName", JSON.stringify(data.username), 365 * 24 * 60 * 60);
  }

  
  useEffect(() => {
    setDefaultValues({
      username: getCookie("userName") || "",
      email: getCookie("userEmail") || "",
    });
  }, []);
  
  const form = useForm<SendMessageFormSchemaType>({
    resolver: zodResolver(SendMessageFormSchema),
    defaultValues,
  });
  

  async function onSubmit(data: SendMessageFormSchemaType) {
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
