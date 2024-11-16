"use client";
import React from "react";
import RainbowBorderComponent from "./rainbow-border";
import Image from "next/image";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface CrateProps {
	className?: string;
	price?: string;
	tokens?: string;
	type?: "Small" | "Medium" | "Large";
}

export default function Crate({
	className = "",
	price = "100",
	tokens = "1",
	type = "Small",
}: CrateProps) {
	// Define the image source based on the crate type
	const crateImageSrc =
		type === "Small"
			? "/cratesmall@2x.png"
			: type === "Medium"
			? "/cratemedium@2x.png"
			: "/cratelarge@2x.png";

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div>
					<RainbowBorderComponent>
						<div className="rounded-lg bg-purple-600 flex flex-col items-center justify-center p-4 text-primary font-h3 cursor-pointer">
							<div className="w-full flex flex-row items-start justify-between">
								<b className="text-lg">{type} Crate</b>
								<div className="rounded bg-purple-400 flex items-center py-1 px-2 gap-1 text-highlight">
									<Image
										className="w-5 h-5"
										alt="Token Icon"
										src="/tablericonpokerchip.svg"
										width={20}
										height={20}
									/>
									<span>x</span>
									<span>{tokens}</span>
								</div>
							</div>
							<Image
								className="w-[7.5rem] h-[7.5rem] object-cover my-4"
								loading="lazy"
								alt={`${type} Crate`}
								src={crateImageSrc}
								width={500}
								height={500}
							/>
							<div className="w-full rounded flex items-center justify-between p-2 text-purple-800 bg-gradient-to-r from-[#a9ff84] via-[#7fffe1] to-[#ffeb89]">
								<div className="flex items-center gap-1">
									<Image
										className="w-5 h-5"
										loading="lazy"
										alt="Price Tag Icon"
										src="/tablericontagstarred1.svg"
										width={20}
										height={20}
									/>
									<span>{price}</span>
								</div>
								<b>TKN</b>
							</div>
						</div>
					</RainbowBorderComponent>
				</div>
			</DialogTrigger>

			<DialogContent className="flex flex-col max-w-md bg-purple-800 p-6 rounded-lg text-primary w-full">
				<DialogHeader className="w-full">
					<DialogTitle className="text-2xl font-bold">
						{type} Crate
					</DialogTitle>
					<DialogDescription className="text-sm">
						By purchasing this crate you will get up to {tokens}{" "}
						tokens randomly from the game sponsors.
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center w-full my-4">
					<Image
						className="w-[7.5rem] h-[7.5rem] object-cover"
						loading="lazy"
						alt={`${type} Crate`}
						src={crateImageSrc}
						width={500}
						height={500}
					/>
					<div className="mt-4 w-full">
						<p>Price:</p>
						<div className="mt-2 rounded flex p-2 text-purple-800 bg-rainbow self-stretch">
							<Image
								className="w-5 h-5"
								loading="lazy"
								alt="Price Tag Icon"
								src="/logo.svg"
								width={20}
								height={20}
							/>
							<div className="flex items-center gap-1">
								<span>{price}</span>
							</div>
							<b className="ml-1">TKN</b>
						</div>
					</div>
				</div>
				<DialogFooter className="flex flex-row w-full items-center justify-evenly">
					<Button
						variant="outline"
						className="bg-purple-800 ring-0 border-0 ring-offset-0 placeholder:ring-offset-0"
					>
						Back
					</Button>
					<Button className="bg-primary text-highlight rounded-full">
						<Image
							className="w-5 h-5"
							loading="lazy"
							alt="Price Tag Icon"
							src="/tablericontagstarred1.svg"
							width={20}
							height={20}
						/>{" "}
						Purchase Crate
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
