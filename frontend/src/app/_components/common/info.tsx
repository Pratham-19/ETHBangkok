"use client";

import { FunctionComponent } from "react";
import Chips from "./chips";
import Image from "next/image";
import InfoBadge from "./info-badge";

export type InfoType = {
	className?: string;
};

const Info: FunctionComponent<InfoType> = ({ className = "" }) => {
	return (
		<div
			className={`self-stretch flex flex-row items-start justify-start gap-[0.5rem] text-left text-[1rem] text-primary font-h3 ${className}`}
		>
			<Image
				alt="TokenPic"
				className="h-[5rem] w-[5rem] relative rounded-tl-2xl rounded-tr-81xl rounded-b-81xl overflow-hidden shrink-0 object-cover"
				src="/tokenpic1.svg"
				width={500}
				height={500}
			/>
			<div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[11.75rem]">
				<div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
					<div className="flex flex-row items-center justify-start gap-[0.25rem]">
						<div className="relative">TokenName</div>
						<div className="rounded-81xl bg-purple-400 flex flex-row items-center justify-center py-[0.125rem] px-[0.437rem] text-[0.75rem] text-highlight">
							<div className="relative">meme</div>
						</div>
					</div>
					<div className="flex flex-row items-center justify-start gap-[0.125rem] text-[0.75rem]">
						<div className="relative inline-block min-w-[1.125rem]">
							#h
						</div>
						<div className="relative inline-block min-w-[1.438rem]">
							ago
						</div>
					</div>
				</div>
				<div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[5.437rem] gap-[0.187rem]">
					<div className="relative inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[2.75rem]">
						Share
					</div>
					<div className="relative overflow-hidden text-ellipsis whitespace-nowrap">
						our most recent post
					</div>
				</div>
				<div className="relative text-[0.75rem]">
					CityMapper DePIN is a decentralized physical infrastructure
					network designed to collaboratively map cities using
					blockchain technology. By harnessing the power of community
					contributors equipped with IoT devices, drones, and
					smartphones, the project aims to create real-time, detailed
					urban maps that include streets, buildings, traffic
					patterns, and environmental data. Participants are rewarded
					with tokens for contributing accurate data, supporting
					applications in navigation, urban planning, and smart city
					initiatives, all while ensuring transparency and
					community-driven governance.
				</div>
				<div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] text-[0.75rem]">
					<InfoBadge
						iconSrc="/tablericoncoins.svg"
						amount="1000"
						tokenSymbol="$TKN1"
						description="for grabs"
						iconSize="1.2rem"
						className="custom-class" // Additional classes if needed
					/>
				</div>
			</div>
		</div>
	);
};

export default Info;
