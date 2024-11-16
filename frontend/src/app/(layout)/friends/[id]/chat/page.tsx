"use client";
import ChatComponent from "@/app/_components/common/chat";
import ChatStrip from "@/app/_components/common/chat-strip";
import {
	DynamicConnectButton,
	useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import React from "react";

export default function Page() {
	const { address } = "0x02C8345B2DF9Ff6122b0bE7B79cB219d956bd701";
	const { primaryWallet } = useDynamicContext();
	console.log(primaryWallet);

	return (
		<div>
			<div className="self-stretch flex flex-col gap-y-4">
				<ChatStrip
					time="0h"
					userName="UserName"
					id=""
					summaryEnabled={false}
				/>
				<div className="text-white">
					{!primaryWallet ? (
						<DynamicConnectButton>
							Connect Wallet
						</DynamicConnectButton>
					) : (
						<div className="container mx-auto p-4">
							<h1 className="text-2xl font-bold mb-4">
								Chat with {primaryWallet?.address?.slice(0, 6)}
								...
								{primaryWallet?.address?.slice(-4)}
							</h1>
						

							<ChatComponent
								peerAddress={address}
								primaryWallet={primaryWallet}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
