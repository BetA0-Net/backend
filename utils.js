let { decodeAddress, encodeAddress } = require("@polkadot/keyring");
let { hexToU8a, isHex, BN, BN_ONE } = require("@polkadot/util");
let { ContractPromise } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");

const toStream = require("it-to-stream");
let FileType = require("file-type");
let axios = require("axios");
require("dotenv").config();

module.exports.send_telegram_message = async (message) => {
  const { data } = await axios({
    baseURL:
      "https://api.telegram.org/bot5345932208:AAHTgUrXV3TBDsJpASGRzh5_NxRpt1RV4ws",
    url: "/sendMessage",
    method: "post",
    data: {
      chat_id: -646752258,
      text: message,
    },
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

module.exports.splitFileName = function (path) {
  return str.split("\\").pop().split("/").pop();
};

module.exports.randomString = function (length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports.getFileTypeFromCID = async function (ipfs, cid) {
  let fileExt = await FileType.fromStream(
    toStream(
      ipfs.cat(cid, {
        length: 100, // or however many bytes you need
      })
    )
  );
  return fileExt;
};

module.exports.isValidAddressPolkadotAddress = function (address) {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    //console.log(error);
    return false;
  }
};

module.exports.delay = function (timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

module.exports.todayFolder = function () {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months = require(1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var hour = dateObj.getHours();

  return year + "/" + month + "/" + day + "/" + hour;
};

// randomNumber
module.exports.randomInt = function (min, max) {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomValue;
};

// getEstimatedGas
const toContractAbiMessage = (contractPromise, message) => {
  const value = contractPromise.abi.messages.find((m) => m.method === message);

  if (!value) {
    const messages = contractPromise?.abi.messages
      .map((m) => m.method)
      .join(", ");

    const error = `"${message}" not found in metadata.spec.messages: [${messages}]`;
    console.error(error);

    return { ok: false, error };
  }

  return { ok: true, value };
};

async function getGasLimit(
  api,
  userAddress,
  message,
  contract,
  options = {},
  args = []
) {
  const abiMessage = toContractAbiMessage(contract, message);

  if (!abiMessage.ok) return abiMessage;

  const { value, gasLimit, storageDepositLimit } = options;

  const { gasRequired } = await api.call.contractsApi.call(
    userAddress,
    contract.address,
    value ?? new BN(0),
    gasLimit ?? null,
    storageDepositLimit ?? null,
    abiMessage.value.toU8a(args)
  );

  return { ok: true, value: gasRequired };
}

function readOnlyGasLimitContract(contract) {
  if (!contract) {
    console.log("contract invalid...");
    return;
  }
  try {
    const ret = contract?.api?.registry?.createType("WeightV2", {
      refTime: new BN(1_000_000_000_000),
      proofSize: new BN(5_000_000_000_000).isub(BN_ONE),
    });

    return ret;
  } catch (error) {
    console.log("error", error);
  }
}

async function getEstimatedGasContract(
  address,
  contract,
  value,
  queryName,
  ...args
) {
  let ret;
  try {
    const gasLimitResult = await getGasLimit(
      contract?.api,
      address,
      queryName,
      contract,
      { value },
      args
    );

    if (!gasLimitResult.ok) {
      console.log(queryName, "getEstimatedGas err", gasLimitResult.error);
      return;
    }

    ret = gasLimitResult?.value;
  } catch (error) {
    console.log("error fetchGas xx>>", error.message);
  }

  return ret;
}

// readOnlyGasLimit
module.exports.readOnlyGasLimit = function (contract) {
  if (!contract) {
    console.log("contract invalid...");
    return;
  }
  try {
    const ret = contract?.api?.registry?.createType("WeightV2", {
      refTime: new BN(1_000_000_000_000),
      proofSize: new BN(5_000_000_000_000).isub(BN_ONE),
    });

    return ret;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports.getEstimatedGas = async function (
  address,
  contract,
  value,
  queryName,
  ...args
) {
  let ret;
  try {
    const gasLimitResult = await getGasLimit(
      contract?.api,
      address,
      queryName,
      contract,
      { value },
      args
    );

    if (!gasLimitResult.ok) {
      console.log(queryName, "getEstimatedGas err", gasLimitResult.error);
      return;
    }

    ret = gasLimitResult?.value;
  } catch (error) {
    console.log("error fetchGas xx>>", error.message);
  }

  return ret;
};

// readOnlyGasLimit
module.exports.readOnlyGasLimit = function (contract) {
  if (!contract) {
    console.log("contract invalid...");
    return;
  }
  try {
    const ret = contract?.api?.registry?.createType("WeightV2", {
      refTime: new BN(1_000_000_000_000),
      proofSize: new BN(5_000_000_000_000).isub(BN_ONE),
    });

    return ret;
  } catch (error) {
    console.log("error", error);
  }
};

// get random number api
// const API_URL = process.env.API_RANDOM_NUMBER;
// const role = process.env.ROLE_API_RANDOM_NUMBER;

// module.exports.getRandomNumber = async function () {
//   const options = {
//     method: 'GET',
//     url: `${API_URL}/${role}`,
//     params: {
//       min: '0',
//       max: '99',
//       fragment: 'true',
//       json: 'true'
//     },
//     headers: {
//       'X-RapidAPI-Key': '0cc3b29ef4msh0885b763408f67ep1bbc99jsnbbda27b2d4de',
//       'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data.number;
//   } catch (error) {
//     console.error(error);
//   }
// };

module.exports.getRandomNumberByContract = async function (contract, caller) {
  if (!contract || !caller) {
    return null;
  }

  const gasLimit = readOnlyGasLimitContract(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["getLastRandRumber"](
      caller,
      { gasLimit, value }
    );

    if (result.isOk) {
      const a = output.toHuman().Ok.replace(/\,/g, "");
      return Number(a);
    }
  } catch (error) {
    console.log("@_@ ", "getLastRandRumber", " error >>", error.message);
  }

  return null;
};

module.exports.executeRandom = async function (contract, caller, max) {
  if (!contract || !caller) {
    return null;
  }

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  let unsubscribe;

  let gasLimit;
  let value = 0;

  gasLimit = await getEstimatedGasContract(
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
        if (statusText === "0") console.log(`random ...`);
      }
    })
    .then((unsub) => (unsubscribe = unsub))
    .catch((e) => console.log("e", e));
  return unsubscribe;
};
