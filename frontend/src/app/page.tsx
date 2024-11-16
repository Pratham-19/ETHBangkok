"use client";
import Link from "next/link";
import Notificationheader from "./_components/common/notificationheader";
import ThemeButton from "./_components/common/theme-button";
import Image from "next/image";

export default function Home() {
	return (
		<div className="fixed inset-0 flex flex-col bg-purple-800">
			<div className="h-full bg-[url('/landing.png')] bg-cover bg-center bg-no-repeat flex flex-col gap-y-">
				<div className="fixed top-4 left-0 right-0 z-50 w-11/12 mx-auto">
					<Notificationheader
						notificationheaderBackdropFilter="blur(10px)"
						notificationheaderBackgroundColor="rgba(26, 1, 26, 0.6)"
						notificationheaderHeight="4.688rem"
						notificationheaderPadding="1rem 0rem"
						notificationheaderGap="0.5rem"
						notificationheaderAlignSelf="stretch"
						className="rounded-xl"
					/>
				</div>
				<div className="flex flex-col items-center justify-end h-full w-11/12 mx-auto">
					<div className="text-primary text-[3rem] font-black leading-[3rem]">
						<span className="bg-clip-text text-[2.8rem] text-transparent bg-rainbow">
							Explore Web3{` `}
						</span>
						Make friends Earn rewards
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-[1rem] py-6 bg-gradient-to-b from-transparent via-purple-800 to-purple-800">
					<h3 className="text-primary text-[1.8rem] font-semibold">
						Game Sponsors
					</h3>
					<Image
						src="/sponsors.svg"
						alt="sponsors"
						width={1000}
						height={1000}
						className="flex items-center justify-center gap-[1rem]"
					/>
				</div>
				<Link href="/create-profile" className="mb-6">
					<ThemeButton
						btn="large"
						text="Play Now"
						tablerIconBrandX="/tabler-icon-3d-cube-sphere.svg"
						tablerIconBrandXHeight="2rem"
						tablerIconBrandXWidth="2rem"
						className="w-fit mx-auto !p-[1.6rem] !px-[2.6rem] text-[1.8rem] font-semibold"
						defaultGap={"0.5rem"}
					/>
				</Link>
			</div>
		</div>
	);
}
