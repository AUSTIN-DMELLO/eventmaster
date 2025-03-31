import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ContextProvider from '../context/Context';
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "EventMaster",
  description: "EventMaster is a platform for event management.",
  icons: {
    icon: '/assets/images/logos.svg'
  }
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ContextProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ContextProvider>
    </ClerkProvider>
  );
}