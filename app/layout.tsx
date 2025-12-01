import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MaxWidth from "@/components/MaxWidthProvider";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import SideBar from "./_component/SideBar";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Timog | Frontend Developer Portfolio",
  description:
    "Portfolio of Ogunleye Christian Timileyin (Timog), a passionate Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web technologies.",
  keywords: [
    "Timog",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Nigeria",
  ],
  authors: [
    {
      name: "Ogunleye Christian Timileyin",
      url: "https://my-portfolio-one-pearl-59.vercel.app",
    },
  ],
  openGraph: {
    title: "Timog | Frontend Developer Portfolio",
    description:
      "Explore my portfolio featuring modern web projects built with React, Next.js, and Tailwind CSS.",
    url: "https://my-portfolio-one-pearl-59.vercel.app",
    siteName: "Timog Portfolio",
    images: [
      {
        url: "/profileImage.jpg",
        width: 1200,
        height: 630,
        alt: "Timog Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timog | Frontend Developer Portfolio",
    description:
      "Frontend Developer Portfolio built with Next.js and Tailwind CSS.",
    creator: "@djtimog",
    images: ["/profileImage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidth className="flex flex-col md:flex-row">
            <Header className="md:hidden" />
            <SideBar className="hidden md:flex" />
            <div className="px-4 pt-16 md:pt-28 pb-10 flex-1 overflow-x-hidden">
              {children}
            </div>
            <Footer className="md:hidden" />
          </MaxWidth>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
