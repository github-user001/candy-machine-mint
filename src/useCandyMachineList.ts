import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { collections } from "./db";
import * as anchor from "@project-serum/anchor";
/**
 * @returns List of the Candy Machine Drops that we include in Minty
 */
// export const useCandyMachineList = (): Array<anchor.web3.PublicKey> => {
export const useCandyMachineList = (): Array<any> => {
  // Once because we are going to be updating this data and we don't want
  // to get into an infinite updating situation for now.
  // Other, more involved ways of handling this can be worked later
  const [machines = [], loading, error] = useCollectionDataOnce(
    collections.candyMachine
  );

  const machinePublicKeys = machines.map((machine) => {
    return new anchor.web3.PublicKey(machine.machineId);
  });

  return machinePublicKeys || [];
};
