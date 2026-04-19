import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MaxWidth from "@/components/MaxWidthProvider";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import SideBar from "./_component/SideBar";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christian Ogunleye",
  alternateName: "Djtimog",
  url: "https://djtimog-portfolio.vercel.app",
  jobTitle: "Full Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/djtimog",
    "https://linkedin.com/in/djtimog",
    "https://x.com/djtimog",
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Christian Ogunleye | Full Stack Developer",
    template: "%s | Christian Ogunleye",
  },
  description:
    "Christian Ogunleye (Djtimog) is a Full Stack Developer based in Lagos, Nigeria, specializing in React, Next.js, Node.js, PostgreSQL, MongoDB, MySQL, REST and GraphQL.",
  keywords: [
    "Christian Ogunleye",
    "Ogunleye Christian Timilehin",
    "Djtimog",
    "Full Stack Developer Lagos",
    "React Developer Nigeria",
    "Next.js Developer",
    "Python Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Developer Nigeria",
    "GraphQL Developer",
    "REST API Developer",
    "TypeScript Developer",
    "LASU Graduate Developer",
  ],
  authors: [
    {
      name: "Christian Ogunleye",
      url: "https://djtimog-portfolio.vercel.app",
    },
  ],
  metadataBase: new URL("https://djtimog-portfolio.vercel.app"),
  alternates: {
    canonical: "https://djtimog-portfolio.vercel.app",
  },
  openGraph: {
    title: "Christian Ogunleye | Full Stack Developer",
    description:
      "Full Stack Developer from Lagos, Nigeria. Building scalable web apps with React, Next.js, Node.js, and PostgreSQL.",
    url: "https://djtimog-portfolio.vercel.app",
    siteName: "Christian Ogunleye Portfolio",
    images: [
      {
        url: "/profileImage.jpg",
        width: 1200,
        height: 630,
        alt: "Christian Ogunleye - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Ogunleye | Full Stack Developer",
    description:
      "Full Stack Developer from Lagos. React, Next.js, Node.js, PostgreSQL, GraphQL.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
