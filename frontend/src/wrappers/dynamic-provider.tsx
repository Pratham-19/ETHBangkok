"use client";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const DynamicProvider = ({ children }: { children: React.ReactNode }) => (
	<DynamicContextProvider
		settings={{
			// environmentId: process.env.DYNAMIC_ENVIRONMENT_ID || "",
			environmentId: "3ea676d0-18b4-4cb3-8181-35e1e299c67e",
			walletConnectors: [EthereumWalletConnectors],
		}}
	>
		{children}
	</DynamicContextProvider>
);

export default DynamicProvider;
