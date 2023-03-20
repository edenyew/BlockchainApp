require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "yNX7nO1qxLDYM8ww-g_l2REqKL74v7Es";

const GOERLI_PRIVATE_KEY =
  "abf241f06d3d0285cf69a251228c1c3a156a4d5f498fc28804e1bb26db56e7a6";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/yNX7nO1qxLDYM8ww-g_l2REqKL74v7Es",
      accounts: [
        "abf241f06d3d0285cf69a251228c1c3a156a4d5f498fc28804e1bb26db56e7a6",
      ],
    },
  },
};
