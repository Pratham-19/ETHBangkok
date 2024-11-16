import { FunctionComponent } from "react";

export type PlayerSkinsType = {
	className?: string;
};

const PlayerSkins: FunctionComponent<PlayerSkinsType> = ({
	className = "",
}) => {
	return (
		<div
			className={`self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-left text-[1.5rem] text-primary font-h3 ${className}`}
		>
			<h3 className="m-0 self-stretch relative text-inherfont-semiboldold font-[inherit]">
				My Skins
			</h3>
			<div className="overflow-x-auto flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border gap-[0.5rem] max-w-full">
				<img
					className="h-[5rem] w-[5rem] relative rounded-lg shrink-0 object-cover"
					loading="lazy"
					alt=""
					src="/pplion@2x.png"
				/>
				<img
					className="h-[5rem] w-[5rem] relative rounded-lg shrink-0 object-cover"
					loading="lazy"
					alt=""
					src="/pprhino@2x.png"
				/>
				<img
					className="h-[5rem] w-[5rem] relative rounded-lg shrink-0 object-cover"
					loading="lazy"
					alt=""
					src="/ppdragon@2x.png"
				/>
				<img
					className="h-[5rem] w-[5rem] relative rounded-lg shrink-0 object-cover"
					loading="lazy"
					alt=""
					src="/ppgorilla@2x.png"
				/>
				<img
					className="h-[5rem] w-[5rem] relative rounded-lg shrink-0 object-cover"
					loading="lazy"
					alt=""
					src="/ppdog-1@2x.png"
				/>
			</div>
		</div>
	);
};

export default PlayerSkins;
