import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl my-4">Welcome</h1>
      <p className="text-2xl">
        This page shows the last block number of
        <span className="text-white"> Ethereum </span> mainnet and the USDT
        balance of a provided address
      </p>
    </div>
  );
};

export default Header;
