"use client";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
	cookieStorage,
	createStorage,
	createConfig,
	WagmiProvider,
} from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { base, baseSepolia, mainnet, optimism } from "viem/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { OnchainKitProvider } from "@coinbase/onchainkit";

const config = createConfig({
	chains: [mainnet, optimism, base],
	multiInjectedProviderDiscovery: false,
	connectors: [
		coinbaseWallet({
			appName: "OnchainKit",
			preference: "smartWalletOnly",
			version: "4",
		}),
	],
	storage: createStorage({
		storage: cookieStorage,
	}),
	transports: {
		[mainnet.id]: http(),
		[optimism.id]: http(),
		[base.id]: http(),
		[baseSepolia.id]: http(),
	},
});

const queryClient = new QueryClient();

const DynamicProvider = ({ children }: { children: React.ReactNode }) => (
	<DynamicContextProvider
		settings={{
			environmentId:
				process.env.DYNAMIC_ENVIRONMENT_ID ||
				"e9fc1751-e769-4b9a-8dc7-826c4525abd0",
			walletConnectors: [
				EthereumWalletConnectors,
				ZeroDevSmartWalletConnectors,
			],
		}}
	>
		<OnchainKitProvider
			apiKey="REgfmKxueZ9M-0BNXL5SacmeHSkhMoBr"
			chain={base}
		>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<DynamicWagmiConnector>{children}</DynamicWagmiConnector>
				</QueryClientProvider>
			</WagmiProvider>
		</OnchainKitProvider>
	</DynamicContextProvider>
);

export default DynamicProvider;
