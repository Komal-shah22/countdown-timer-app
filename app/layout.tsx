import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Countdown Timer - Professional Event Countdown",
  description: "Beautiful, feature-rich countdown timer with dark mode, animations, and sound notifications. Perfect for tracking important events and deadlines.",
  keywords: ["countdown", "timer", "event", "deadline", "countdown timer", "react", "nextjs"],
  authors: [{ name: "KOMAL" }],
  creator: "KOMAL",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Professional Countdown Timer",
    description: "Beautiful countdown timer with dark mode and animations",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
