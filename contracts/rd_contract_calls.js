let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { readOnlyGasLimit, getEstimatedGas } = require("../utils");

let contract;
let abi_contract;

const setBetazRandomContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setBetazRandomAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const getRandomNumberByContract = async function (caller) {
  if (!contract || !caller) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["getLastRandRumber"](
      caller,
      { gasLimit, value }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok.replace(/\,/g, "");
      return parseInt(a);
    }
  } catch (error) {
    console.log("@_@ ", "getLastRandRumber", " error >>", error.message);
  }

  return null;
};

const executeRandom = async function (caller, max) {
  if (!contract || !caller) {
    return null;
  }

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  let unsubscribe;

  let gasLimit;
  let value = 0;

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "random",
    max
  );

  await contract.tx["random"]({ gasLimit, value }, max)
    .signAndSend(keypair, async ({ status, dispatchError }) => {
      if (dispatchError) {
        if (dispatchError.isModule) {
          console.log(dispatchError);
        } else {
          console.log("dispatchError", dispatchError.toString());
        }
      }

      if (status) {
        const statusText = Object.keys(status.toHuman())[0];
        if (statusText === "0") console.log(`Random ${status}`);
      }
    })
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
};

module.exports = {
  contract,
  abi_contract,
  setBetazRandomAbiContract,
  setBetazRandomContract,
  getRandomNumberByContract,
  executeRandom,
};
