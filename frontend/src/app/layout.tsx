import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
			<body className={`${font.variable} antialiased`}>{children}</body>
		</html>
	);
}
