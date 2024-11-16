"use client";
import Menu from "../_components/common/menu";
import Notificationheader from "../_components/common/notificationheader";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="fixed inset-0 flex flex-col bg-purple-800">
			{/* Fixed Header */}
			<div className="fixed top-0 left-0 right-0 z-50">
				<Notificationheader
					notificationheaderBackdropFilter="blur(30px)"
					notificationheaderBackgroundColor="rgba(26, 1, 26, 0.3)"
					notificationheaderHeight="4.688rem"
					notificationheaderPadding="1rem 0rem"
					notificationheaderGap="0.5rem"
					notificationheaderAlignSelf="stretch"
				/>
			</div>

			{/* Main Content Area */}
			<main className="flex-1 overflow-hidden pt-[4.688rem] pb-[5rem]">
				<div className="h-full px-4">{children}</div>
			</main>

			{/* Fixed Footer */}
			<div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
				<div className="w-full max-w-md">
					<Menu property1="Default" back to="/" />
				</div>
			</div>
		</div>
	);
}
