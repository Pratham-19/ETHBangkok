import type { Metadata } from "next";
import "./globals.css";
import DynamicProvider from "@/wrappers/dynamic-provider";

export const metadata: Metadata = {
  title: "Token Trek",
  description: "Token Trek",
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
