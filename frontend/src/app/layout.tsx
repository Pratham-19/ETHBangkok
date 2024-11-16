import type { Metadata } from "next";
import "./globals.css";
import DynamicProvider from "@/wrappers/dynamic-provider";

export const metadata: Metadata = {
  title: "0xCity",
  description: "0xCity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <DynamicProvider>{children}</DynamicProvider>
      </body>
    </html>
  );
}
