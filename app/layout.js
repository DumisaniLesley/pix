import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pix | Share Your Moments, Create Memories",
  description: "Photo Sharing app for sharing moments and creating memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Navbar />
          {children}
        </ClerkProvider>
        </body>
    </html>
  );
}
