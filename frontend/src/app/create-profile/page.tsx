"use client";
import React, { useCallback, useState } from "react";
import ThemeButton from "../_components/common/theme-button";
import Icon from "../_components/common/icon";
import Image from "next/image";
import Notificationheader from "../_components/common/notificationheader";
import { Input } from "../_components/ui/input";
import ImageUploader from "../_components/common/image-uploader";
import FrameComponent from "../_components/common/frame-component";
import { useSocialAccounts } from "@dynamic-labs/sdk-react-core";
import { ProviderEnum } from "@dynamic-labs/types";

// Define types for profile data
interface ProfileData {
	username: string;
	profileImage: string;
	team: {
		primary: string;
		secondary: string;
	} | null;
}

interface TeamSelection {
	primary: string;
	secondary: string;
}

export default function CreateProfilePage() {
	const { error, isProcessing, signInWithSocialAccount } =
		useSocialAccounts();
	// Combined state for all profile data
	const [profileData, setProfileData] = useState<ProfileData>({
		username: "",
		profileImage: "/profile-picture@3x.png",
		team: null,
	});

	const [next, setNext] = useState(false);

	// Handler for username changes
	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProfileData((prev) => ({
			...prev,
			username: e.target.value,
		}));
	};

	// Handler for image upload
	const handleImageUpload = (imageUrl: string) => {
		setProfileData((prev) => ({
			...prev,
			profileImage: imageUrl,
		}));
	};

	// Handler for team selection
	const handleTeamSelect = useCallback(
		(selection: TeamSelection) => {
			const updatedProfileData = {
				...profileData,
				team: selection,
			};

			setProfileData(updatedProfileData);
			console.log("Final Profile Data:", updatedProfileData);
		},
		[profileData]
	);

	return (
		<div className="w-full relative bg-purple-800 overflow-hidden flex flex-col items-center justify-start p-[1rem] box-border gap-[2rem] leading-[normal] tracking-[normal]">
			<div>
				<Notificationheader />
			</div>
			{!next ? (
				<>
					<section
						className={`self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[2rem] max-w-full text-left text-[1rem] text-primary font-h3`}
					>
						<h1 className="m-0 self-stretch relative text-[2rem] font-semibold font-[inherit]">
							Create Profile
						</h1>
						<div className="self-stretch flex flex-col items-center justify-start text-[1.5rem] text-thistle">
							<ImageUploader onImageUpload={handleImageUpload} />
							<div className="self-stretch rounded-lg bg-purple-600 flex flex-col items-start justify-start p-[0.75rem] z-[1] mt-[-1.75rem] gap-2">
								<Input
									type="text"
									placeholder="Add User Name_"
									value={profileData.username}
									onChange={handleUsernameChange}
									className="bg-transparent border-none text-primary placeholder:text-thistle focus-visible:ring-purple-400 text-2xl font-semibold font-[inherit]"
								/>
							</div>
						</div>
						<div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
							<div className="relative">
								Get social and complete quests faster, connect
								your X or world account.
							</div>
							<div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem] text-highlight">
								<div
									onClick={() =>
										signInWithSocialAccount(
											ProviderEnum.Twitter
										)
									}
								>
									<ThemeButton
										btn="large"
										text="Connect X"
										tablerIconBrandX="/tablericonbrandx.svg"
									/>
								</div>
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
									brandLabelHeight="unset"
									brandLabelDisplay="unset"
									brandLabelFontSize="1rem"
									brandLabelWidth="unset"
								/>
							</div>
						</div>
						<div className="self-stretch flex flex-row items-start justify-center gap-[1rem] max-w-full">
							<div className="flex-1 relative inline-block min-w-[12.125rem] max-w-full box-border pl-[1.25rem] pr-[1.25rem]">
								Save profile and continue without connecting
								accounts.
							</div>
							<div onClick={() => setNext(true)}>
								<Icon
									property1="def"
									tablerIconArrowBigRight="/tablericonarrowbigright.svg"
								/>
							</div>
						</div>
					</section>
					<section className="self-stretch rounded-lg bg-purple-400 flex flex-col items-start justify-start p-[1rem] gap-[1rem] text-left text-[1rem] text-primary font-h3">
						<div className="relative">
							Add your noun and be eligible to earn passive
							income!
						</div>
						<div className="h-[2.5rem] shadow-[0px_-2px_4px_rgba(0,_0,_0,_0.5)_inset,_0px_4px_2px_rgba(255,_255,_255,_0.3)_inset] rounded-81xl bg-primary border-purple-400 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.375rem] px-[5.062rem] gap-[0.125rem] text-highlight">
							<img
								className="h-[1.5rem] w-[3.375rem] relative overflow-hidden shrink-0"
								loading="lazy"
								alt=""
								src="/noogles.svg"
							/>
							<div className="relative">Join with Noun</div>
						</div>
					</section>
				</>
			) : (
				<>
					<h1 className="m-0 self-stretch relative text-[2rem] text-center font-semibold font-[inherit]">
						Create Profile
					</h1>
					<section className="self-stretch h-[39.875rem] flex flex-col items-start justify-start gap-[1rem]">
						<FrameComponent
							to="/intro"
							frameDivBackgroundImage="url('/frame-26@3x.png')"
							amber="Amber"
							rootBackgroundImage="url('/root@3x.png')"
							azure="Azure"
							onTeamSelect={() =>
								handleTeamSelect({
									primary: "Amber",
									secondary: "Azure",
								})
							}
							isSelected={profileData.team?.primary === "Amber"}
						/>
						<FrameComponent
							to="/intro"
							frameDivBackgroundImage="url('/frame-25@3x.png')"
							amber="Emerald"
							rootBackgroundImage="url('/frame-23@3x.png')"
							azure="Ruby"
							onTeamSelect={() =>
								handleTeamSelect({
									primary: "Emerald",
									secondary: "Ruby",
								})
							}
							isSelected={profileData.team?.primary === "Emerald"}
						/>
					</section>
				</>
			)}
		</div>
	);
}
