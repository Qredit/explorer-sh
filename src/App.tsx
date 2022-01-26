import React from "react";

import NavBarMenu from "./components/navigation/Menu";

import { Outlet, useParams } from "react-router-dom";

import { BlockchainContext } from "./BlockchainContext";
import { Blockchains } from "./lib/blockchains";

function App() {
  let params = useParams();

  return (
    <div className="App">
      <NavBarMenu />
      <div className="min-h-screen">
      <BlockchainContext.Provider value={params.blockchain}><Outlet/></BlockchainContext.Provider>
      </div>
      <div className="mt-8 h-12  border-t-2 border-secondary dark:border-dark-secondary text-center text-white">
        <div className="max-w-7xl mx-auto py-6">
            2022 copyleft explorer.sh | Made by <a href="#" className="text-greenish">xbridge project</a> | Market Data by <a href="#" className="text-greenish">coingecko</a> 
        </div>
      </div>
    </div>
  );
}

export default App;
