import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";
import { Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import SendMeMessageForm from "../_component/SendMeMessageForm";
import { CopyRight } from "@/components/ui/copy-right";
import { FadeIn, SlideInBottom, SlideInRight } from "@/components/animation";

export default function Contact() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <div className="space-y-4 text-center border-b pb-7">
          <h2 className="font-bold text-4xl">Contact</h2>
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to{" "}
            <Link
              href="mailto:ogunleyetimilehin15@gmail.com"
              className="text-blue-500"
            >
              ogunleyetimilehin15@gmail.com
            </Link>
            . Want to get connected? Follow me on the social channels below.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-3">
            {socialLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <Button size="icon" variant="outline" className="rounded-full">
                  <link.icon />
                  <span className="sr-only">{link.name}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>

      <div>
        <SlideInRight>
          <div className="space-y-2 pb-5">
            <h1 className="border-l-4 text-4xl px-3 font-bold">
              Contact Details
            </h1>
            <p>
              Feel free to reach out to me through any of the contact details
              below.
            </p>
          </div>
        </SlideInRight>

        <SlideInBottom>
          <div className="flex flex-wrap gap-5 mb-10">
            <Link href="tel:+2348146289722">
              <div className="border-l-2 flex space-x-3 items-center p-2">
                <Phone className="h-10 w-10" />
                <div className="space-y-2">
                  <p className="text-lg font-bold">Phone</p>
                  <p className="text-md">+234-705-5354-961</p>
                </div>
              </div>
            </Link>
            <Link href="mailto:ogunleyetimihin15@gmail.com">
              <div className="border-l-2 flex space-x-3 items-center p-2">
                <Mail className="h-10 w-10" />
                <div className="space-y-2">
                  <p className="text-lg font-bold">Mail</p>
                  <p className="text-md">Ogunleyetimihin15@gmail.com</p>
                </div>
              </div>
            </Link>
            <div className="border-l-2 flex space-x-3 items-center p-2 cursor-pointer">
              <Globe className="h-10 w-10" />
              <div className="space-y-2">
                <p className="text-lg font-bold">Location</p>
                <p className="text-md">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </SlideInBottom>

        <SlideInBottom>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8424639493346!2d3.3819037!3d6.5415687999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d0bca5b86dd%3A0x1011590af56c04a6!2s14%20Kusa%20St%2C%20Pedro%2C%20Lagos%20110001%2C%20Lagos!5e0!3m2!1sen!2sng!4v1743454373162!5m2!1sen!2sng"
              height="450"
              className="border-0 w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </SlideInBottom>
      </div>

      <div id="send_me_message" className="py-3">
        <SlideInRight>
          <div className="space-y-2 pb-5">
            <h1 className="border-l-4 text-4xl px-3 font-bold">Get in Touch</h1>
            <p>
              Have a project in mind or need to hire someone? Feel free to reach
              out. Let&apos;s collaborate to bring your ideas to life and create
              something amazing together.
            </p>
          </div>
        </SlideInRight>

        <SlideInBottom>
          <div className="border rounded-lg p-4">
            <SendMeMessageForm />
          </div>
        </SlideInBottom>
      </div>
      <CopyRight />
    </div>
  );
}
