import { FunctionComponent, useCallback } from "react";
import IntroNotificationBar from "../_components/common/intro-notification-bar";
import Icon from "../_components/common/icon";

const Intro: FunctionComponent = () => {
	return (
		<div className="w-full relative bg-purple-800 overflow-hidden flex flex-col items-center justify-start p-[1rem] box-border gap-[2rem] leading-[normal] tracking-[normal]">
			<IntroNotificationBar catGuideNobg1="/catguidenobg-1@2x.png" />
			<section className="self-stretch flex flex-col items-end justify-between min-h-[16.25rem] text-left text-[1.5rem] text-primary font-h3">
				<div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
					<h3 className="m-0 self-stretch relative text-inherit font-extrabold font-[inherit]">
						Welcome Quiller!!!
					</h3>
					<div className="relative text-[1rem]">
						<p className="m-0">
							This is a great start to explore the web3 world, and
							earn while doing so!
						</p>
						<p className="m-0">&nbsp;</p>
						<p className="m-0">
							You will be able to grab tokens from sponsors, by
							completing tasks. And meet interesting people on the
							go.
						</p>
					</div>
				</div>
				<Icon
					property1="def"
					to="/create-profile"
					iconPadding="0.5rem"
					tablerIconArrowBigRight="/tablericonarrowbigright.svg"
					tablerIconArrowBigRightHeight="1.5rem"
					tablerIconArrowBigRightWidth="1.5rem"
				/>
			</section>
		</div>
	);
};

export default Intro;
