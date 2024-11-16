"use client";
import Link from "next/link";
import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TeamPair = {
	primary: string;
	secondary: string;
};

export type FrameComponentType = {
	className?: string;
	amber?: string;
	azure?: string;
	frameDivBackgroundImage?: CSSProperties["backgroundImage"];
	rootBackgroundImage?: CSSProperties["backgroundImage"];
	to: string;
	onTeamSelect?: (teams: TeamPair) => void;
	isSelected?: boolean;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
	className = "",
	to,
	frameDivBackgroundImage,
	amber,
	rootBackgroundImage,
	azure,
	onTeamSelect,
	isSelected = false,
}) => {
	const frameDivStyle: CSSProperties = useMemo(
		() => ({
			backgroundImage: frameDivBackgroundImage,
		}),
		[frameDivBackgroundImage]
	);

	const rootStyle: CSSProperties = useMemo(
		() => ({
			backgroundImage: rootBackgroundImage,
		}),
		[rootBackgroundImage]
	);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (onTeamSelect && amber && azure) {
			onTeamSelect({
				primary: amber,
				secondary: azure,
			});
		}
	};

	const selectedStyle = isSelected
		? "ring-4 ring-highlight ring-offset-2 ring-offset-purple-800"
		: "";

	return (
		<div
			className={`self-stretch flex-1 flex flex-row items-start justify-start gap-[1rem] text-left text-[2rem] text-purple-800 font-h3 ${className}`}
		>
			<div
				className={`self-stretch flex-1 rounded-lg overflow-hidden flex flex-col items-start justify-end py-[1rem] px-[0.75rem] bg-cover bg-no-repeat bg-[top] cursor-pointer transition-all duration-200 hover:scale-[1.02] ${selectedStyle}`}
				style={frameDivStyle}
				onClick={handleClick}
			>
				<div className="self-stretch relative font-semibold">
					{amber}
				</div>
			</div>
			<div
				className={`self-stretch flex-1 rounded-lg overflow-hidden flex flex-col items-start justify-end py-[1rem] px-[0.75rem] bg-cover bg-no-repeat bg-[top] cursor-pointer transition-all duration-200 hover:scale-[1.02] ${selectedStyle}`}
				style={rootStyle}
				onClick={handleClick}
			>
				<div className="self-stretch relative font-semibold">
					{azure}
				</div>
			</div>
		</div>
	);
};

export default FrameComponent;
