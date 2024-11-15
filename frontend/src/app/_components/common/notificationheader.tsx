import Image from "next/image";
import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NotificationheaderType = {
	className?: string;

	/** Style props */
	notificationheaderBackdropFilter?: CSSProperties["backdropFilter"];
	notificationheaderBackgroundColor?: CSSProperties["backgroundColor"];
	notificationheaderHeight?: CSSProperties["height"];
	notificationheaderPadding?: CSSProperties["padding"];
	notificationheaderGap?: CSSProperties["gap"];
	notificationheaderAlignSelf?: CSSProperties["alignSelf"];
	notificationheaderWidth?: CSSProperties["width"];
	tablerIcon3dCubeSphereHeight?: CSSProperties["height"];
	tablerIcon3dCubeSphereWidth?: CSSProperties["width"];
	appNameMargin?: CSSProperties["margin"];
	appNameTextDecoration?: CSSProperties["textDecoration"];
	appNameFontSize?: CSSProperties["fontSize"];
};

const Notificationheader: FunctionComponent<NotificationheaderType> = ({
	className = "",
	notificationheaderBackdropFilter,
	notificationheaderBackgroundColor,
	notificationheaderHeight,
	notificationheaderPadding,
	notificationheaderGap,
	notificationheaderAlignSelf,
	notificationheaderWidth,
	tablerIcon3dCubeSphereHeight,
	tablerIcon3dCubeSphereWidth,
	appNameMargin,
	appNameTextDecoration,
	appNameFontSize,
}) => {
	const notificationheaderStyle: CSSProperties = useMemo(() => {
		return {
			backdropFilter: notificationheaderBackdropFilter,
			backgroundColor: notificationheaderBackgroundColor,
			height: notificationheaderHeight,
			padding: notificationheaderPadding,
			gap: notificationheaderGap,
			alignSelf: notificationheaderAlignSelf,
			width: notificationheaderWidth,
		};
	}, [
		notificationheaderBackdropFilter,
		notificationheaderBackgroundColor,
		notificationheaderHeight,
		notificationheaderPadding,
		notificationheaderGap,
		notificationheaderAlignSelf,
		notificationheaderWidth,
	]);

	const tablerIcon3dCubeSphereStyle: CSSProperties = useMemo(() => {
		return {
			height: tablerIcon3dCubeSphereHeight,
			width: tablerIcon3dCubeSphereWidth,
		};
	}, [tablerIcon3dCubeSphereHeight, tablerIcon3dCubeSphereWidth]);

	const appNameStyle: CSSProperties = useMemo(() => {
		return {
			margin: appNameMargin,
			textDecoration: appNameTextDecoration,
			fontSize: appNameFontSize,
		};
	}, [appNameMargin, appNameTextDecoration, appNameFontSize]);

	return (
		<div
			className={`self-stretch [backdrop-filter:blur(30px)] bg-gray-200 flex flex-row items-center justify-center py-[1rem] px-[0rem] gap-[0.5rem] text-left text-[2rem] font-h3 ${className}`}
			style={notificationheaderStyle}
		>
			<Image
				className="h-[2.5rem] w-[2.5rem] relative overflow-hidden shrink-0"
				loading="lazy"
				alt=""
				src="/tablericon3dcubesphere.svg"
				style={tablerIcon3dCubeSphereStyle}
				width={500}
				height={500}
			/>
			<h1
				className="m-0 relative text-inherit font-extrabold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(88.39deg,_#a9ff84,_#7fffe1_33%,_#f98cff_66%,_#ffeb89)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
				style={appNameStyle}
			>
				appName
			</h1>
		</div>
	);
};

export default Notificationheader;
