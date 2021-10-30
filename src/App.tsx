import "./App.css";

import { useCandyMachineList } from "./useCandyMachineList";
import { usePeriodUpdateOnChainMintData } from "./usePeriodicFetchOnChainMintData";

const App = () => {
  const machinePublicKeys = useCandyMachineList();

  usePeriodUpdateOnChainMintData(machinePublicKeys);

  return (
    <div>
      Keep this page open to update Minty's NFT Metadata with live, on-chain
      information
    </div>
  );
};

export default App;
