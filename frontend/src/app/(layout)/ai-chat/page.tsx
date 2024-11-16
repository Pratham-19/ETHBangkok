"use client";
import ChatComponent from "@/app/_components/common/chat";
import ChatStrip from "@/app/_components/common/chat-strip";
import Menu from "@/app/_components/common/menu";
import Notificationheader from "@/app/_components/common/notificationheader";
import React from "react";
import RainbowBorderComponent from "../../_components/common/rainbow-border";

export default function page() {
	return (
		<div>
			<div className="self-stretch flex flex-col gap-y-4">
				<ChatStrip
					time="0h"
					userName="Game assistant"
					id=""
					summaryEnabled={false}
				/>
				<RainbowBorderComponent>
					<ChatComponent />
				</RainbowBorderComponent>
			</div>
		</div>
	);
}
