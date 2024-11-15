import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ThemeButton = {
	className?: string;
	text?: string;
	tablerIconBrandX?: string;

	/** Variant props */
	btn?: "large";

	/** Style props */
	defaultFlex?: CSSProperties["flex"];
	defaultHeight?: CSSProperties["height"];
	defaultPadding?: CSSProperties["padding"];
	defaultGap?: CSSProperties["gap"];
	tablerIconBrandXHeight?: CSSProperties["height"];
	tablerIconBrandXWidth?: CSSProperties["width"];
	brandLabelHeight?: CSSProperties["height"];
	brandLabelDisplay?: CSSProperties["display"];
	brandLabelFontSize?: CSSProperties["fontSize"];
	brandLabelWidth?: CSSProperties["width"];
};

const ThemeButton: FunctionComponent<ThemeButton> = ({
	className = "",
	btn = "large",
	text = "Connect X",
	defaultFlex,
	defaultHeight,
	defaultPadding,
	defaultGap,
	tablerIconBrandX,
	tablerIconBrandXHeight,
	tablerIconBrandXWidth,
	brandLabelHeight,
	brandLabelDisplay,
	brandLabelFontSize,
	brandLabelWidth,
}) => {
	const defaultStyle: CSSProperties = useMemo(() => {
		return {
			flex: defaultFlex,
			height: defaultHeight,
			padding: defaultPadding,
			gap: defaultGap,
		};
	}, [defaultFlex, defaultHeight, defaultPadding, defaultGap]);

	const tablerIconBrandXStyle: CSSProperties = useMemo(() => {
		return {
			height: tablerIconBrandXHeight,
			width: tablerIconBrandXWidth,
		};
	}, [tablerIconBrandXHeight, tablerIconBrandXWidth]);

	const brandLabelStyle: CSSProperties = useMemo(() => {
		return {
			height: brandLabelHeight,
			display: brandLabelDisplay,
			fontSize: brandLabelFontSize,
			width: brandLabelWidth,
		};
	}, [
		brandLabelHeight,
		brandLabelDisplay,
		brandLabelFontSize,
		brandLabelWidth,
	]);

	return (
		<div
			className={`flex-1 shadow-[0px_-2px_4px_rgba(0,_0,_0,_0.3)_inset,_0px_4px_2px_rgba(255,_255,_255,_0.3)_inset] rounded-81xl bg-primary border-purple-400 border-[1px] border-solid box-border h-[2.5rem] overflow-hidden flex flex-row items-center justify-center py-[0.5rem] px-[1rem] gap-[0.125rem] text-left text-[1rem] text-highlight font-h3 ${className}`}
			data-btn={btn}
			style={defaultStyle}
		>
			<img
				className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
				loading="lazy"
				alt=""
				src={tablerIconBrandX}
				style={tablerIconBrandXStyle}
			/>
			<div className="relative" style={brandLabelStyle}>
				{text}
			</div>
		</div>
	);
};

export default ThemeButton;
