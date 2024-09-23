import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Manager",
  description: "Created using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        "antialiased",
        inter.className,
      )}>
        <DashboardWrapper>
          {children}
        </DashboardWrapper>
      </body>
    </html>
  );
}
