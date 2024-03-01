import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pix | Share Your Moments, Create Memories",
  description: "Photo Sharing app for sharing moments and creating memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
