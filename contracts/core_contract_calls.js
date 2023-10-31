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

const canFinalize = async function (caller) {
  if (!contract || !caller) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["canFinalize"](caller, {
      gasLimit,
      value,
    }, caller);

    if (result.isOk) {
      const a = output.toHuman().Ok;
      return a;
    }
  } catch (error) {
    console.log("@_@ ", "getTmp", " error >>", error.message);
  }

  return null;
};

module.exports = {
  setBetazCoreContract,
  setBetazCoreAbiContract,
  canFinalize,
};
