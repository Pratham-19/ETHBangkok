"use client";
import { useCallback } from "react";
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
		<div>
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
		</div>
	);
};

export default page;
