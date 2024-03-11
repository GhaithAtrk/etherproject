"use client";

import React, { FC, useEffect, useState } from "react";
import { Web3 } from "web3";
import Loader from "../utils/Loader";

const LastBlock: FC = () => {
  const web3 = new Web3("wss://ethereum.publicnode.com");

  const [latestBlock, setLatestBlock] = useState<string | bigint>();

  const getLatestBlock = async (): Promise<void> => {
    const latest: bigint = await web3.eth.getBlockNumber();

    setLatestBlock(latest);
  };

  const newBlockHeader = async (): Promise<void> => {
    const subscription: any = await web3.eth.subscribe("newBlockHeaders");
    subscription.on("data", (blockHeader: any) =>
      setLatestBlock(blockHeader.number)
    );
    subscription.on("error", () => {
      console.error;
      setLatestBlock("an error occurred.. please check your console");
    });
  };

  useEffect(() => {
    getLatestBlock();
    newBlockHeader();
  }, []);

  let latestBlockNumber = latestBlock ? latestBlock?.toString() : <Loader />;

  return (
    <div className="text-xl">
      Last block number: <span className="text-white">{latestBlockNumber}</span>
    </div>
  );
};

export default LastBlock;
