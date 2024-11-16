import {
	DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const DynamicProvider = ({ children }: { children: React.ReactNode }) => (
	<DynamicContextProvider
		settings={{
			environmentId: "e9fc1751-e769-4b9a-8dc7-826c4525abd0",
			walletConnectors: [EthereumWalletConnectors],
		}}
	>
		{children}
	</DynamicContextProvider>
);

export default DynamicProvider;
