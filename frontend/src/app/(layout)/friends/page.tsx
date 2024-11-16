"use client";
import { FunctionComponent, useCallback } from "react";
import Notificationheader from "../../_components/common/notificationheader";
import Menu from "../../_components/common/menu";
import ChatStrip from "../../_components/common/chat-strip";

const Friends: FunctionComponent = () => {
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
			<section className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0.437rem] pr-[0.375rem] box-border max-w-full text-left text-[2rem] text-primary font-h3">
				<div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem] max-w-full">
					<h1 className="m-0 self-stretch relative text-inherit font-extrabold font-[inherit]">
						0x Frens
					</h1>
					<div className="self-stretch h-[37.25rem] overflow-y-auto shrink-0 flex flex-col items-start justify-start gap-[0.5rem]">
						<ChatStrip
							time="0h"
							userName="UserName"
							summay="Last message summary here"
							id=""
							summaryEnabled={true}
						/>
						<ChatStrip
							time="0h"
							userName="UserName"
							summay="Last message summary here"
							id=""
							summaryEnabled={true}
						/>
						<ChatStrip
							time="0h"
							userName="UserName"
							summay="Last message summary here"
							id=""
							summaryEnabled={true}
						/>
					</div>
				</div>
			</section>
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
};

export default Friends;
