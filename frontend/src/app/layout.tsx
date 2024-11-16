import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DynamicProvider from "@/wrappers/dynamic-provider";

const font = localFont({
	src: "./fonts/HostGrotesk-Regular.otf",
	variable: "--font-geist-sans",
	weight: "100 900",
});

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
			<body className={`${font.variable} antialiased`}>
				<DynamicProvider>{children}</DynamicProvider>
			</body>
		</html>
	);
}
