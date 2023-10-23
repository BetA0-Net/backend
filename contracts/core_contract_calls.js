let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils");

let contract;
let abi_contract;

const setBetazCoreContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setBetazCoreAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

module.exports = {
  setBetazCoreContract,
  setBetazCoreAbiContract,
};
