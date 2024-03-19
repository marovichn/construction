import { Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "LMN Nikola Marović",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
