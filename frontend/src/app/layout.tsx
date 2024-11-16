import type { Metadata } from "next";
import "./globals.css";
import DynamicProvider from "@/wrappers/dynamic-provider";
import { ErudaProvider } from "@/wrappers/Eruda";
import MiniKitProvider from "@/wrappers/minikit-provider";
import NextAuthProvider from "@/wrappers/nextauth-provider";

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
      <NextAuthProvider>
        <ErudaProvider>
          <MiniKitProvider>
            <body className={`antialiased`}>
              <DynamicProvider>{children}</DynamicProvider>
            </body>
          </MiniKitProvider>
        </ErudaProvider>
      </NextAuthProvider>
    </html>
  );
}
