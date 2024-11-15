"use client";
import ChatComponent from "@/app/_components/common/chat";
import ChatStrip from "@/app/_components/common/chat-strip";
import Menu from "@/app/_components/common/menu";
import Notificationheader from "@/app/_components/common/notificationheader";
import React from "react";
import RainbowBorderComponent from "../_components/common/rainbow-border";

export default function page() {
	return (
		<div className="w-full relative bg-purple-800 overflow-hidden flex flex-col items-end justify-start pt-[1rem] px-[1rem] pb-[1.125rem] box-border gap-[1rem] leading-[normal] tracking-[normal]">
			<Notificationheader
				notificationheaderBackdropFilter="blur(30px)"
				notificationheaderBackgroundColor="rgba(26, 1, 26, 0.3)"
				notificationheaderHeight="4.688rem"
				notificationheaderPadding="1rem 0rem"
				notificationheaderGap="0.5rem"
				notificationheaderAlignSelf="unset"
				notificationheaderWidth="22.563rem"
				tablerIcon3dCubeSphereHeight="2.5rem"
				tablerIcon3dCubeSphereWidth="2.5rem"
				appNameMargin="0"
				appNameTextDecoration="unset"
				appNameFontSize="2rem"
			/>
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
			<Menu
				property1="Default"
				back
				menuAlignSelf="unset"
				menuHeight="unset"
				menuGap="0.5rem"
				menuWidth="22.563rem"
				to="/"
				iconWidth="2.625rem"
				iconHeight="2.625rem"
				menuButtonsPadding="0.5rem"
				iconHeight1="3rem"
				iconWidth1="3rem"
				iconPadding="0rem 0.375rem"
				tablerIconUserCircleHeight="2rem"
				tablerIconUserCircleWidth="2rem"
			/>
		</div>
	);
}
