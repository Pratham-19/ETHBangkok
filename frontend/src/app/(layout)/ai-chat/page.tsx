"use client";
import ChatComponent from "@/app/_components/common/chat";
import ChatStrip from "@/app/_components/common/chat-strip";
import RainbowBorderComponent from "../../_components/common/rainbow-border";

export default function page() {
	return (
		<div>
			<div className="self-stretch flex flex-col gap-y-4">
				<h1 className="text-[2rem] m-0 self-stretch relative font-semibold">
					Game assistant
				</h1>
				<RainbowBorderComponent>
					<ChatComponent />
				</RainbowBorderComponent>
			</div>
		</div>
	);
}
