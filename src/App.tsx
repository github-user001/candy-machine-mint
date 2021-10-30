import "./App.css";

import { useCandyMachineList } from "./useCandyMachineList";
import { usePeriodUpdateOnChainMintData } from "./usePeriodicFetchOnChainMintData";
import { useSolPrice } from "./useSolPrice";

const App = () => {
  const solPrice = useSolPrice();
  const machinePublicKeys = useCandyMachineList();

  usePeriodUpdateOnChainMintData(machinePublicKeys, solPrice);

  return (
    <div>
      Keep this page open to update Minty's NFT Metadata with live, on-chain
      information
    </div>
  );
};

export default App;
