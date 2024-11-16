"use client";

import { FunctionComponent } from "react";
import Image from "next/image";
import InfoBadge from "./info-badge";

export interface InfoType {
	className?: string;
	tokenImage: string;
	tokenName: string;
	tokenType: string;
	timeAgo: string;
	shareText?: string;
	description: string;
	rewardAmount: string;
	rewardSymbol: string;
}

const Info: FunctionComponent<InfoType> = ({
	className = "",
	tokenImage,
	tokenName,
	tokenType,
	timeAgo,
	shareText,
	description,
	rewardAmount,
	rewardSymbol,
}) => {
	return (
		<div
			className={`self-stretch flex flex-row items-start justify-start gap-[0.5rem] text-left text-[1rem] text-primary font-h3 ${className}`}
		>
			<Image
				alt="TokenPic"
				className="h-[5rem] w-[5rem] relative rounded-tl-2xl rounded-tr-81xl rounded-b-81xl overflow-hidden shrink-0 object-cover"
				src={tokenImage}
				width={500}
				height={500}
			/>
			<div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[11.75rem] py-4">
				<div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
					<div className="flex flex-row items-center justify-start gap-[0.25rem]">
						<div className="relative">{tokenName}</div>
						<div className="rounded-81xl bg-purple-400 flex flex-row items-center justify-center py-[0.125rem] px-[0.437rem] text-[0.75rem] text-highlight">
							<div className="relative">{tokenType}</div>
						</div>
					</div>
					<div className="flex flex-row items-center justify-start gap-[0.125rem] text-[0.75rem]">
						<div className="relative inline-block min-w-[1.125rem]">
							#{timeAgo}
						</div>
						<div className="relative inline-block min-w-[1.438rem]">
							ago
						</div>
					</div>
				</div>
				{shareText && (
					<div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[5.437rem] gap-[0.187rem]">
						<div className="relative inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[2.75rem]">
							Share
						</div>
						<div className="relative overflow-hidden text-ellipsis whitespace-nowrap">
							{shareText}
						</div>
					</div>
				)}
				<div className="min-h-[10rem] flex flex-col items-start justify-start gap-4">
					<div className="relative text-[0.75rem] line-clamp-6">
						{description}
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem] text-[0.75rem]">
						<InfoBadge
							iconSrc="/tablericoncoins.svg"
							amount={rewardAmount}
							tokenSymbol={rewardSymbol}
							description="for grabs"
							iconSize="1.2rem"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
