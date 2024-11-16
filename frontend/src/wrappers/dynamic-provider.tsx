import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

const DynamicProvider = ({ children }: { children: React.ReactNode }) => (
  <DynamicContextProvider
    settings={{
      environmentId: process.env.DYNAMIC_ENVIRONMENT_ID || "",
      walletConnectors: [
        EthereumWalletConnectors,
        ZeroDevSmartWalletConnectors,
      ],
    }}
  >
    {children}
  </DynamicContextProvider>
);

export default DynamicProvider;
