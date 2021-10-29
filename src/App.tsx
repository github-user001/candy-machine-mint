import "./App.css";
import { useEffect, useMemo } from "react";

import Home from "./Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl, Commitment } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { getCandyMachineState } from "./candy-machine";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

const ___refactor_me = async () => {
  const wallet = new anchor.Wallet(anchor.web3.Keypair.generate());
  const candyMachineId = new anchor.web3.PublicKey(
    "HoE3Y8Edc6XaYuobWsSpp2YzGUJaeiYiJdCUAoykhzWv"
  );
  const httpUri = "https://explorer-api.devnet.solana.com/";
  const requiredTxFinalization: Commitment = "confirmed";
  const connection = new anchor.web3.Connection(
    httpUri,
    requiredTxFinalization
  );
  const {
    candyMachine,
    goLiveDate,
    itemsAvailable,
    itemsRemaining,
    itemsRedeemed,
  } = await getCandyMachineState(
    wallet as anchor.Wallet,
    candyMachineId,
    connection
  );

  console.log({
    candyMachine,
    goLiveDate,
    itemsAvailable,
    itemsRemaining,
    itemsRedeemed,
  });
};

const App = () => {
  useEffect(() => {
    ___refactor_me();
  }, []);

  return <div>dude what is this</div>;
};

export default App;
