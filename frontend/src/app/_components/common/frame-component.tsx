import Link from "next/link";
import {
	FunctionComponent,
	useMemo,
	type CSSProperties,
	useCallback,
} from "react";

export type FrameComponentType = {
	className?: string;
	amber?: string;
	azure?: string;

	/** Style props */
	frameDivBackgroundImage?: CSSProperties["backgroundImage"];
	rootBackgroundImage?: CSSProperties["backgroundImage"];

	/** Action props */
	to: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
	className = "",
	to,
	frameDivBackgroundImage,
	amber,
	rootBackgroundImage,
	azure,
}) => {
	const frameDivStyle: CSSProperties = useMemo(() => {
		return {
			backgroundImage: frameDivBackgroundImage,
		};
	}, [frameDivBackgroundImage]);

	const rootStyle: CSSProperties = useMemo(() => {
		return {
			backgroundImage: rootBackgroundImage,
		};
	}, [rootBackgroundImage]);

	return (
		<div
			className={`self-stretch flex-1 flex flex-row items-start justify-start gap-[1rem] text-left text-[2rem] text-purple-800 font-h3 ${className}`}
		>
			<Link
				className="self-stretch flex-1 rounded-lg overflow-hidden flex flex-col items-start justify-end py-[1rem] px-[0.75rem]  bg-cover bg-no-repeat bg-[top] cursor-pointer"
				href={to}
				style={frameDivStyle}
			>
				<div className="self-stretch relative font-extrabold">
					{amber}
				</div>
			</Link>
			<Link
				href={to}
				className="self-stretch flex-1 rounded-lg overflow-hidden flex flex-col items-start justify-end py-[1rem] px-[0.75rem] bg-cover bg-no-repeat bg-[top]"
				style={rootStyle}
			>
				<div className="self-stretch relative font-extrabold">
					{azure}
				</div>
			</Link>
		</div>
	);
};

export default FrameComponent;
