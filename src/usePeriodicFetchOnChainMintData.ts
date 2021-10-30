import * as anchor from "@project-serum/anchor";
import { Commitment } from "@solana/web3.js";
import { CandyMachineState, getCandyMachineState } from "./candy-machine";
import { saveCandyMachineState } from "./db";
import useInterval from "./useInterval";

const wallet: anchor.Wallet = new anchor.Wallet(anchor.web3.Keypair.generate());

const httpUri = "https://explorer-api.devnet.solana.com/";
const requiredTxFinalization: Commitment = "confirmed";
const connection = new anchor.web3.Connection(httpUri, requiredTxFinalization);

const INTERVAL_SECONDS = 2;
const INTERVAL_MILLIS = INTERVAL_SECONDS * 1000;

export const usePeriodUpdateOnChainMintData = (
  candyMachineIds: Array<anchor.web3.PublicKey>
) => {
  useInterval(() => {
    // for each candy machine we're watching
    candyMachineIds.forEach((machinePublicKey: anchor.web3.PublicKey) => {
      // fetch candy machine data from blockchain
      getCandyMachineState(wallet, machinePublicKey, connection).then(
        ({
          goLiveDateSecondsPastEpoch,
          itemsAvailable,
          itemsRemaining,
          itemsRedeemed,
        }: CandyMachineState) => {
          saveCandyMachineState(machinePublicKey.toString(), {
            goLiveDateSecondsPastEpoch,
            itemsAvailable,
            itemsRemaining,
            itemsRedeemed,
          });
        }
      );
    });

    // get candy machine info from blockchain
  }, INTERVAL_MILLIS);
};
