"use client";
import { FunctionComponent, useState } from "react";
import IntroNotificationBar from "../_components/common/intro-notification-bar";
import Icon from "../_components/common/icon";
import Image from "next/image";

const Intro: FunctionComponent = () => {
	const [select, setSelect] = useState(false);
	return (
		<div className="w-full relative bg-purple-800 overflow-hidden flex flex-col items-center justify-start p-[1rem] box-border gap-[2rem] leading-[normal] tracking-[normal]">
			<IntroNotificationBar
				catGuideNobg1={
					!select ? "/catguidenobg-1@2x.png" : "/catlandnobg-1@2x.png"
				}
				frameSectionBackgroundImage={
					!select ? "" : "url('/frame-69@3x.png')"
				}
			/>
			<section className="self-stretch flex flex-col items-end justify-between min-h-[16.25rem] text-left text-[1.5rem] text-primary font-h3">
				<div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
					<h3 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit]">
						{!select ? "Welcome Quiller!!!" : "Earn passive income"}
					</h3>
					<div className="relative text-[1rem]">
						<p className="m-0">
							{!select
								? `This is a great start to explore the web3 world, and
							earn while doing so!`
								: `Conquer the land! The team that interact the most on a piece of land will can be elegible to earn passive income during 1 week after conquering the land. `}
						</p>
						<p className="m-0">&nbsp;</p>
						<p className="m-0">
							{!select
								? `You will be able to grab tokens from sponsors, by
							completing tasks. And meet interesting people on the
							go.`
								: `Your team will also be able to rent this land to sponsors and get an stake of the rent.`}
						</p>
					</div>
				</div>
				{!select ? (
					<div onClick={() => setSelect(true)}>
						<Icon
							property1="def"
							to="/intro"
							iconPadding="0.5rem"
							tablerIconArrowBigRight="/tablericonarrowbigright.svg"
							tablerIconArrowBigRightHeight="1.5rem"
							tablerIconArrowBigRightWidth="1.5rem"
						/>
					</div>
				) : (
					<div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem] text-highlight">
						{/* <div className="h-[2.5rem] shadow-[0px_-2px_4px_rgba(0,_0,_0,_0.5)_inset,_0px_4px_2px_rgba(255,_255,_255,_0.3)_inset] rounded-81xl bg-primary border-purple-400 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-center py-[0.375rem] px-[2.125rem] gap-[0.5rem]">
							<Image
								className="h-[1.5rem] w-[3.375rem] relative overflow-hidden shrink-0"
								loading="lazy"
								alt=""
								src="/noogles1.svg"
								width={500}
								height={500}
							/>
							<div className="relative">Buy Noun to own land</div>
						</div> */}
						<Icon
							property1="def"
							to="/"
							iconPadding="0.5rem"
							tablerIconArrowBigRight="/tablericonarrowbigright.svg"
							tablerIconArrowBigRightHeight="1.5rem"
							tablerIconArrowBigRightWidth="1.5rem"
						/>
					</div>
				)}
			</section>
		</div>
	);
};

export default Intro;
