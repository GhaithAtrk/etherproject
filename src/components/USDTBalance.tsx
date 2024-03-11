"use client";

import React, { FC, useEffect, useState } from "react";
import { Web3 } from "web3";

import Loader from "../utils/Loader";

interface USDTBalanceProps {}

const USDTBalance: FC<USDTBalanceProps> = () => {
  const [balance, setBalance] = useState<string | bigint>();

  const web3 = new Web3("wss://ethereum.publicnode.com");

  let tokenAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

  const minABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const getBalance = async () => {
    let contract = new web3.eth.Contract(minABI, tokenAddress);
    try {
      const balance: number = await contract.methods
        .balanceOf(tokenAddress)
        .call();
      setBalance(web3?.utils.fromWei(balance, "tether"));
    } catch (error) {
      setBalance("an error occurred.. please check your console");
      console.error;
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  let USDTBalance = balance ? balance.toString() : <Loader />;

  return (
    <div className="text-xl text-center">
      <div className="mb-4">
        USDT Balance: <span className="text-white">{USDTBalance}</span>
      </div>
      <p className="text-sm text-gray-800">(for the provided address {tokenAddress})</p>
    </div>
  );
};

export default USDTBalance;
