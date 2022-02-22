import React, { useEffect, useState } from "react";
import { WsProvider } from "@polkadot/api";
import { ethers } from "ethers";
import { SignerProvider } from "@acala-network/eth-providers";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [_provider, setProvider] = useState<SignerProvider | null>(null);

  useEffect(() => {
    const wsProvider = new WsProvider("wss://mandala.polkawallet.io");
    const bodhiProvider = new SignerProvider({ provider: wsProvider });
    setProvider(bodhiProvider);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
