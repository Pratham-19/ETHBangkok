import Info from "@/app/_components/common/info";
import Menu from "@/app/_components/common/menu";
import Notificationheader from "@/app/_components/common/notificationheader";
import ThemeButton from "@/app/_components/common/theme-button";
import { FunctionComponent, useCallback } from "react";

const Quest: FunctionComponent = () => {
	return (
		<div>
			<form className="m-0 self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.25rem] gap-[1rem]">
				<img
					className="self-stretch relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
					loading="lazy"
					alt=""
					src="/frame-87@2x.png"
				/>
				<Info />
				<div className="self-stretch rounded-lg bg-purple-600 flex flex-row items-center justify-start p-[0.75rem]">
					<h1 className="m-0 relative text-[1.5rem] font-semibold font-h3 text-thistle text-left">
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
		</div>
	);
};

export default Quest;
