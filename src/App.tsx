import React from "react";

import Menu from "./components/navigation/Menu";

import { Outlet, useParams } from "react-router-dom";

import { BlockchainContext } from "./BlockchainContext";
import { Blockchains } from "./lib/blockchains";

function App() {
  let params = useParams();
  console.log(params.blockchain)
  return (
    <div className="App">
      <BlockchainContext.Provider value={params.blockchain}><Menu />
      <div className="min-h-screen">
      <Outlet/>
      </div>
      <div className="mt-8 h-12  border-t-2 border-secondary dark:border-dark-secondary text-center text-white">
        <div className="max-w-7xl mx-auto py-6 text-black dark:text-white">
            2022 copyleft explorer.sh | Made by <a href="https://xbridge.sh/" className="text-greenish">xbridge project</a> | Market Data by <a href="https://coingecko.com" className="text-greenish">coingecko</a> 
        </div>
      </div>
      </BlockchainContext.Provider>
    </div>
  );
}

export default App;
