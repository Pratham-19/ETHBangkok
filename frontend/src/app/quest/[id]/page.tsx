import Info from "@/app/_components/common/info";
import Menu from "@/app/_components/common/menu";
import Notificationheader from "@/app/_components/common/notificationheader";
import ThemeButton from "@/app/_components/common/theme-button";
import { FunctionComponent, useCallback } from "react";

const Quest: FunctionComponent = () => {
	return (
		<div className="w-full relative bg-purple-800 overflow-hidden flex flex-col items-center justify-start p-[1rem] box-border gap-[1rem] leading-[normal] tracking-[normal]">
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
				appNameMargin="unset"
				appNameTextDecoration="none"
				appNameFontSize="2rem"
			/>
			<form className="m-0 self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.25rem] gap-[1rem]">
				<img
					className="self-stretch relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
					loading="lazy"
					alt=""
					src="/frame-87@2x.png"
				/>
				<Info />
				<div className="self-stretch rounded-lg bg-purple-600 flex flex-row items-center justify-start p-[0.75rem]">
					<h1 className="m-0 relative text-[1.5rem] font-extrabold font-h3 text-thistle text-left">
						Paste X url or transaction
					</h1>
				</div>
				<div className="self-stretch flex flex-row items-center justify-end flex-wrap content-center gap-[1rem]">
					<ThemeButton
						btn="large"
						text="VR watch"
						defaultFlex="1"
						defaultHeight="2.5rem"
						defaultPadding="0.5rem 1rem"
						defaultGap="0.125rem"
						tablerIconBrandX="/tablericoncamera.svg"
						tablerIconBrandXHeight="1.5rem"
						tablerIconBrandXWidth="1.5rem"
						brandLabelHeight="unset"
						brandLabelDisplay="unset"
						brandLabelFontSize="1rem"
						brandLabelWidth="unset"
					/>
					<ThemeButton
						btn="large"
						text="Go to Task"
						defaultFlex="1"
						defaultHeight="2.5rem"
						defaultPadding="0.5rem 1rem"
						defaultGap="0.125rem"
						tablerIconBrandX="/tablericonexternallink.svg"
						tablerIconBrandXHeight="1.5rem"
						tablerIconBrandXWidth="1.5rem"
						brandLabelHeight="unset"
						brandLabelDisplay="unset"
						brandLabelFontSize="1rem"
						brandLabelWidth="unset"
					/>
				</div>
			</form>
			<Menu
				property1="Default"
				back
				menuAlignSelf="stretch"
				menuHeight="unset"
				menuGap="0.5rem"
				menuWidth="unset"
				to="/main"
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

export default Quest;
