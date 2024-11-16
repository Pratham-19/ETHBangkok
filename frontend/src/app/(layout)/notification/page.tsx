"use client";
import { FunctionComponent, useCallback } from "react";
import Notificationheader from "../../_components/common/notificationheader";
import NotificationTop from "../../_components/common/notification-top";
import Menu from "../../_components/common/menu";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "../../_components/ui/dialog";
import NotificationComponent from "../../_components/common/notificaitons-component";

const page = () => {
	const onAccordionHeaderClick = useCallback(
		(event: React.MouseEvent<HTMLElement>) => {
			const element = event.target as HTMLElement;
			const accItem = element.closest("[data-acc-item]") || element;
			const accContent = accItem.querySelector(
				"[data-acc-content]"
			) as HTMLElement;
			const isOpen = accItem.hasAttribute("data-acc-open");

			if (isOpen) {
				accContent?.classList.add("grid-rows-[0fr]");
				accContent?.classList.remove("grid-rows-[1fr]");
				accItem.removeAttribute("data-acc-open");
			} else {
				accContent?.classList.add("grid-rows-[1fr]");
				accContent?.classList.remove("grid-rows-[0fr]");
				accItem.setAttribute("data-acc-open", "true");
			}
		},
		[]
	);

	return (
		<div className="w-full h-screen flex flex-col bg-purple-800 p-4 box-border gap-4 overflow-hidden">
			{/* Notification Header */}
			<Notificationheader
				notificationheaderBackdropFilter="blur(30px)"
				notificationheaderBackgroundColor="rgba(26, 1, 26, 0.3)"
				notificationheaderHeight="4.688rem"
				notificationheaderPadding="1rem 0rem"
				notificationheaderGap="0.5rem"
				notificationheaderAlignSelf="stretch"
			/>

			{/* Title and Logo */}
			<div className="flex items-center gap-2 py-2">
				<img
					className="h-[1.7rem] w-[7.25rem]"
					loading="lazy"
					alt="Logo"
					src="/xmtplogotype-1.svg"
				/>
				<h1 className="text-5xl font-semibold text-primary min-w-[8.438rem]">
					/ Notifications
				</h1>
			</div>

			{/* Scrollable Notifications Section */}
			<section className="flex-1 overflow-y-auto space-y-4">
				{/* {notification.map((item, index) => ( */}
				<NotificationComponent
					title="TokenName"
					category="meme"
					time="0h"
					cta="Share"
					description="our most recent post"
					tokens={true}
					tokenAmount="1000"
					tickerOne="$TKN1"
					map={true}
					distance="1500"
					link="uniswap"
				/>
				{/* ))} */}
			</section>

			{/* Shadcn Dialog */}
			<Dialog>
				<DialogTrigger>Open Dialog</DialogTrigger>
				<DialogContent>
					<div className="p-4">
						<h2 className="text-xl font-semibold">
							Dialog Content
						</h2>
						<p>This is the content inside the Shadcn dialog.</p>
					</div>
				</DialogContent>
			</Dialog>

			{/* Fixed Menu at the Bottom */}
			<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
				<Menu property1="Default" back to="/" />
			</div>
		</div>
	);
};

export default page;
