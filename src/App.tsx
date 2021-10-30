import "./App.css";

import { useCandyMachineList } from "./useCandyMachineList";
import { usePeriodUpdateOnChainMintData } from "./usePeriodicFetchOnChainMintData";

const App = () => {
  const machinePublicKeys = useCandyMachineList();

  usePeriodUpdateOnChainMintData(machinePublicKeys);

  return <div>{JSON.stringify(machinePublicKeys, null, 4)}</div>;
};

export default App;
