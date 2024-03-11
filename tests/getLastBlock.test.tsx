describe("getLatestBlock", () => {
  it("should fetch the latest block number", async () => {
    const { Web3 } = require("web3");

    const web3 = new Web3("wss://ethereum.publicnode.com");

    const latest: bigint = await web3.eth.getBlockNumber();

    expect(latest > 0).toBe(true);
  });
});

describe("getUSDTBalance", () => {
  it("should fetch USDT Balance", async () => {
    const { Web3 } = require("web3");

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

    let contract = new web3.eth.Contract(minABI, tokenAddress);

    const balance: number = await contract.methods
      .balanceOf(tokenAddress)
      .call();

    expect(balance > 0).toBe(true);
  });
});
