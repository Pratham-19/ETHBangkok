import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Notificationheader from "./notificationheader";

export type IntroNotificationBarType = {
	className?: string;
	catGuideNobg1?: string;

	/** Style props */
	frameSectionAlignItems?: CSSProperties["alignItems"];
	frameSectionBackgroundImage?: CSSProperties["backgroundImage"];
};

const IntroNotificationBar: FunctionComponent<IntroNotificationBarType> = ({
	className = "",
	frameSectionAlignItems,
	frameSectionBackgroundImage,
	catGuideNobg1,
}) => {
	const frameSectionStyle: CSSProperties = useMemo(() => {
		return {
			alignItems: frameSectionAlignItems,
			backgroundImage: frameSectionBackgroundImage,
		};
	}, [frameSectionAlignItems, frameSectionBackgroundImage]);

	return (
		<section
			className={`self-stretch h-[33rem] rounded-2xl overflow-hidden shrink-0 flex flex-col items-end justify-between bg-[url('/public/frame-691@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
			style={frameSectionStyle}
		>
			<Notificationheader
				notificationheaderBackdropFilter="blur(20px)"
				notificationheaderBackgroundColor="rgba(26, 1, 26, 0.6)"
				notificationheaderHeight="unset"
				notificationheaderPadding="1rem 0rem"
				notificationheaderGap="0.5rem"
				notificationheaderAlignSelf="stretch"
				notificationheaderWidth="unset"
				tablerIcon3dCubeSphereHeight="2.5rem"
				tablerIcon3dCubeSphereWidth="2.5rem"
				appNameMargin="unset"
				appNameTextDecoration="none"
				appNameFontSize="2rem"
			/>
			<img
				className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
				alt=""
				src={catGuideNobg1}
			/>
		</section>
	);
};

export default IntroNotificationBar;
