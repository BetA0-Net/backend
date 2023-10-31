let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils");

let contract;
let abi_contract;

const setDIACoreContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setDIAAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const getRandomValueForRound = async function (caller, round) {
  if (!contract || !caller) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "randomOracleGetter::getRandomValueForRound"
    ](
      caller,
      {
        gasLimit,
        value,
      },
      round
    );

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
  setDIACoreContract,
  setDIAAbiContract,
  getRandomValueForRound,
};
