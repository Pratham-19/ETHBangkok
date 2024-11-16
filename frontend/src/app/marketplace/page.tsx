import { FunctionComponent, useCallback } from "react";
import Notificationheader from "../_components/common/notificationheader";
import Menu from "../_components/common/menu";
import Crate from "../_components/common/crate";

const page: FunctionComponent = () => {
	return (
		<div className="w-full relative bg-purple-800 overflow-hidden flex flex-col items-end justify-start pt-[1rem] px-[1rem] pb-[1.125rem] box-border gap-[1rem] leading-[normal] tracking-[normal]">
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
			<section className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0.437rem] pr-[0.375rem] box-border max-w-full text-left text-[2rem] text-primary font-h3">
				<div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[6.312rem] box-border gap-[1rem] max-w-full">
					<h1 className="m-0 self-stretch relative text-inherit font-extrabold font-[inherit]">
						Crate Marketplace
					</h1>
					<div className="relative text-[1rem]">
						Collect random tokens purchasing a mystic crate. You can
						find from one to three different tokens inside the crate
					</div>
					<div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-[0.5rem]">
						<Crate price="100" tokens="1" type="Small" />
					</div>
				</div>
			</section>
			<Menu
				property1="Default"
				back
				menuAlignSelf="unset"
				menuHeight="unset"
				menuGap="0.5rem"
				menuWidth="22.563rem"
				to="/"
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

export default page;
