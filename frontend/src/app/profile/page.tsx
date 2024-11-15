"use client";

import { FunctionComponent, useCallback } from "react";
import Notificationheader from "../_components/common/notificationheader";
import ThemeButton from "../_components/common/theme-button";
import Menu from "../_components/common/menu";
import PlayerProfile from "../_components/common/player-profile";
import PlayerSkins from "../_components/common/player-skins";
import PlayerTokens from "../_components/common/player-tokens";

const Profile: FunctionComponent = () => {
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
			<section className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0.375rem] pb-[2.937rem] box-border gap-[1rem] max-w-full">
				<PlayerProfile />
				<PlayerSkins />
				<div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem]">
					<ThemeButton
						btn="large"
						text="Connect X"
						defaultFlex="1"
						defaultHeight="2.5rem"
						defaultPadding="0.5rem 1rem"
						defaultGap="0.125rem"
						tablerIconBrandX="/tablericonbrandx.svg"
						tablerIconBrandXHeight="1.5rem"
						tablerIconBrandXWidth="1.5rem"
						brandLabelHeight="unset"
						brandLabelDisplay="unset"
						brandLabelFontSize="1rem"
						brandLabelWidth="unset"
					/>
					<ThemeButton
						btn="large"
						text="World Connect"
						defaultFlex="1"
						defaultHeight="2.5rem"
						defaultPadding="0.5rem 1rem"
						defaultGap="0.125rem"
						tablerIconBrandX="/worldcoinlogo-1.svg"
						tablerIconBrandXHeight="1.5rem"
						tablerIconBrandXWidth="1.5rem"
						brandLabelHeight="1.313rem"
						brandLabelDisplay="inline-block"
						brandLabelFontSize="1rem"
						brandLabelWidth="6.875rem"
					/>
				</div>
				<PlayerTokens />
			</section>
			<Menu
				property1="Default"
				back
				menuAlignSelf="unset"
				menuHeight="unset"
				menuGap="0.5rem"
				menuWidth="22.563rem"
				to="main"
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

export default Profile;
