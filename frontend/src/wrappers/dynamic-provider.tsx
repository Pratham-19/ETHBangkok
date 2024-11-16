import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const DynamicProvider = ({ children }: { children: React.ReactNode }) => (
	<DynamicContextProvider
		settings={{
			environmentId: process.env.DYNAMIC_ENVIRONMENT_ID || "",
			walletConnectors: [EthereumWalletConnectors],
		}}
	>
		{children}
	</DynamicContextProvider>
);

export default DynamicProvider;
