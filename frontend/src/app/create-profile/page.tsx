import React from "react";
import ThemeButton from "../_components/common/theme-button";
import Icon from "../_components/common/icon";
import Image from "next/image";
import Notificationheader from "../_components/common/notificationheader";

export default function page() {
	return (
		<div className="w-full relative bg-purple-800 overflow-hidden flex flex-col items-center justify-start p-[1rem] box-border gap-[2rem] leading-[normal] tracking-[normal]">
			<div>
				<Notificationheader />
			</div>
			<section
				className={`self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[2rem] max-w-full text-left text-[1rem] text-primary font-h3`}
			>
				<h1 className="m-0 self-stretch relative text-[2rem] font-extrabold font-[inherit]">
					Create Profile
				</h1>
				<div className="self-stretch flex flex-col items-center justify-start text-[1.5rem] text-thistle">
					<div className="w-[15rem] h-[15rem] rounded-481xl overflow-hidden shrink-0 flex flex-row items-center justify-center py-[3.437rem] px-[3.5rem] box-border bg-[url('/profile-picture@3x.png')] bg-cover bg-no-repeat bg-[top]">
						<Image
							className="h-[7.5rem] w-[7.5rem] relative overflow-hidden shrink-0 opacity-65"
							loading="lazy"
							alt=""
							src="/tablericoncamera.svg"
							width={500}
							height={500}
						/>
					</div>
					<div className="self-stretch rounded-lg bg-purple-600 flex flex-row items-center justify-start p-[0.75rem] z-[1] mt-[-1.75rem]">
						<h3 className="m-0 relative text-inherit font-extrabold font-[inherit]">
							Add User Name_
						</h3>
					</div>
				</div>
				<div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
					<div className="relative">
						Get social and complete quests faster, connect your X or
						world account.
					</div>
					<div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem] text-highlight">
						<ThemeButton
							btn="large"
							text="Connect X"
							tablerIconBrandX="/tablericonbrandx.svg"
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
							brandLabelHeight="unset"
							brandLabelDisplay="unset"
							brandLabelFontSize="1rem"
							brandLabelWidth="unset"
						/>
					</div>
				</div>
				<div className="self-stretch flex flex-row items-start justify-center gap-[1rem] max-w-full">
					<div className="flex-1 relative inline-block min-w-[12.125rem] max-w-full box-border pl-[1.25rem] pr-[1.25rem]">
						Save profile and continue without connecting accounts.
					</div>
					<Icon
						property1="def"
						to="team"
						tablerIconArrowBigRight="/tablericonarrowbigright.svg"
					/>
				</div>
			</section>
			<section className="self-stretch rounded-lg bg-purple-400 flex flex-col items-start justify-start p-[1rem] gap-[1rem] text-left text-[1rem] text-primary font-h3">
				<div className="relative">
					Add your noun and be eligible to earn passive income!
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
		</div>
	);
}
