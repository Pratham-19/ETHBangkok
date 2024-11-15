"use client";
import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../_components/common/frame-component";
import Notificationheader from "../_components/common/notificationheader";

const Team: FunctionComponent = () => {
	return (
		<div className="w-full relative bg-purple-800 overflow-hidden flex flex-col items-start justify-start p-[1rem] box-border gap-[2rem] leading-[normal] tracking-[normal] text-center text-[2rem] text-primary font-h3">
			<Notificationheader
				notificationheaderBackdropFilter="blur(30px)"
				notificationheaderBackgroundColor="rgba(26, 1, 26, 0.3)"
				notificationheaderHeight="unset"
				notificationheaderPadding="1rem 0rem"
				notificationheaderGap="0.5rem"
				notificationheaderAlignSelf="stretch"
				notificationheaderWidth="unset"
				tablerIcon3dCubeSphereHeight="2.5rem"
				tablerIcon3dCubeSphereWidth="2.5rem"
				appNameMargin="unset"
				appNameTextDecoration="unset"
				appNameFontSize="2rem"
			/>
			<div className="self-stretch relative font-extrabold">
				Join a Team
			</div>
			<section className="self-stretch h-[39.875rem] flex flex-col items-start justify-start gap-[1rem]">
				<FrameComponent
					to="/intro"
					frameDivBackgroundImage="url('/frame-26@3x.png')"
					amber="Amber"
					rootBackgroundImage="url('/root@3x.png')"
					azure="Azure"
				/>
				<FrameComponent
					to="/intro"
					frameDivBackgroundImage="url('/frame-25@3x.png')"
					amber="Emerald"
					rootBackgroundImage="url('/frame-23@3x.png')"
					azure="Ruby"
				/>
			</section>
		</div>
	);
};

export default Team;
