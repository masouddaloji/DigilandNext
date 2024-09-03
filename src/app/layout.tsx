import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Provider";
import { ComponentsProps } from "@/types/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "دیجی لند",
    template: "دیجی لند | %s",
  },
  description: "فروشگاه اینترنتی دیجی لند",
};

export default function RootLayout({ children }: ComponentsProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
