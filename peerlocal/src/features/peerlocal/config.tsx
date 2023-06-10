import { optimismGoerli, zkSyncTestnet } from "wagmi/chains";

export const PeerLocalConfig = {
  420: {
    // OP GOERLI
    peerlocal: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    },
  },
  280: {
    // ZKSYNC TEST
    peerlocal: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    },
  },
} as const;

export type Network = keyof typeof PeerLocalConfig;
