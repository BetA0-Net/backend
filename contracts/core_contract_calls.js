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

const getRoundDistance = async function (caller) {
  if (!contract || !caller) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["betA0CoreTrait::getRoundDistance"](caller, {
      gasLimit,
      value,
    });

    if (result.isOk) {
      const a = output.toHuman().Ok.replace(/\,/g, "");
      return parseInt(a);
    }
  } catch (error) {
    console.log("@_@ ", "getTmp", " error >>", error.message);
  }

  return null;
};

module.exports = {
  setBetazCoreContract,
  setBetazCoreAbiContract,
  getRoundDistance,
};
