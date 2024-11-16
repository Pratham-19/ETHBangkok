"use client";

import { FunctionComponent, useCallback } from "react";
import Notificationheader from "../../_components/common/notificationheader";
import ThemeButton from "../../_components/common/theme-button";
import Menu from "../../_components/common/menu";
import PlayerProfile from "../../_components/common/player-profile";
import PlayerSkins from "../../_components/common/player-skins";
import PlayerTokens from "../../_components/common/player-tokens";

const Profile: FunctionComponent = () => {
	return (
		<div>
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
		</div>
	);
};

export default Profile;
