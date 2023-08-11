let { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
let { ContractPromise, Abi } = require("@polkadot/api-contract");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
let { contract } = require("./contract");
let {
  randomInt,
  getEstimatedGas,
  getRandomNumber,
} = require("./utils");
require("dotenv").config();

let socket = "wss://ws.test.azero.dev";
const provider = new WsProvider(socket);
const api = new ApiPromise({ provider, rpc: jsonrpc });

let mongoose = require("mongoose");
let database = require("./database.js");

const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
let MobileDetect = require("mobile-detect");

let fs = require("fs");
let https = require("https");
let privateKey = fs.readFileSync("./a0bet_net.key", "utf8");
let certificate = fs.readFileSync("./a0bet_net.crt", "utf8");
let credentials = { key: privateKey, cert: certificate };

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 1000, // Limit each IP to 60 requests per `window` (here, per 1 minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Apply the rate limiting middleware to all requests
app.use(limiter);

app.post("/getEventsByPlayer", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let player = req.body.player;
  let limit = req.body.limit;
  let offset = req.body.offset;
  let sort = req.body.sort;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!sort) sort = -1;
  if (!player) {
    return res.send({ status: "FAILED", message: "Invalid Address" });
  }

  let data = await database.WinEvent.find({ player: player })
    .sort({ blockNumber: parseInt(sort) })
    .skip(parseInt(offset))
    .limit(parseInt(limit));
  let data1 = await database.LoseEvent.find({ player: player })
    .sort({ blockNumber: parseInt(sort) })
    .skip(parseInt(offset))
    .limit(parseInt(limit));

  var result = data.concat(data1);
  //console.log(player,result);
  if (sort) {
    result = result
      .sort(function (a, b) {
        return parseInt(b.blockNumber) - parseInt(a.blockNumber);
      })
      .slice(0, limit);
  } else {
    result = result
      .sort(function (a, b) {
        return parseInt(a.blockNumber) - parseInt(b.blockNumber);
      })
      .slice(0, limit);
  }
  return res.send({ status: "OK", ret: result });
});

// finalize
app.post("/finalize", async (req, res) => {
  let { player } = req.body;

  const number_api = await getRandomNumber();
  let rd_number;

  if (number_api) {
    rd_number = number_api;
  } else {
    return randomInt(0,99);
  }

  try {
    const contract_data = new ContractPromise(
      api,
      contract.CONTRACT_ABI,
      contract.CONTRACT_ADDRESS
    );

    if (!contract_data || !player) {
      return res.status(400).json({ error: "Invalid request" });
    }

    let gasLimit;
    const value = 0;

    const keyring = new Keyring({ type: "sr25519" });
    const PHRASE = process.env.PHRASE;
    const keypair = keyring.createFromUri(PHRASE);
    let unsubscribe;
    gasLimit = await getEstimatedGas(
      keypair.address,
      contract_data,
      value,
      "finalize",
      player,
      rd_number
    );

    await contract_data.tx
      .finalize({ gasLimit, value }, player, rd_number)
      .signAndSend(keypair, ({ status, events, txHash }) => {
        if (status.isInBlock || status.isFinalized) {
          events?.forEach(
            async ({ event: { data, method, section }, phase }) => {
              if (section === "contracts" && method === "ContractEmitted") {
                const [accId, bytes] = data.map((data, _) => data).slice(0, 2);

                const contract_address = accId.toString();

                if (contract_address === contract.CONTRACT_ADDRESS) {
                  const abi_contract = new Abi(contract.CONTRACT_ABI);

                  const decodedEvent = abi_contract.decodeEvent(bytes);

                  let event_name = decodedEvent.event.identifier;

                  if (event_name === "WinEvent" || event_name === "LoseEvent") {
                    const eventValues = [];
                    if (status.isFinalized) {
                      const blockHash = status.asFinalized;
                      const signedBlock = await api.rpc.chain.getBlock(
                        blockHash
                      );
                      const blockNumber = signedBlock
                        .toHuman()
                        .block.header.number.split(",")
                        .join("");

                      for (let i = 0; i < decodedEvent.args.length; i++) {
                        const value = decodedEvent.args[i];
                        eventValues.push(value.toString());
                      }

                      if (event_name === "LoseEvent") {
                        let obj = {
                          blockNumber: blockNumber,
                          player: eventValues[0],
                          is_over: eventValues[1] == 1 ? true : false,
                          random_number: eventValues[2],
                          bet_number: eventValues[3],
                          bet_amount: eventValues[4]
                            ? eventValues[4] / 10 ** 12
                            : 0,
                        };
                        let found = await database.LoseEvent.findOne(obj);
                        if (!found) {
                          await database.LoseEvent.create(obj);
                          // console.log("added LoseEvent", obj);
                        }

                        return res.send({
                          status: "OK",
                          ret: {
                            is_win: false,
                            random_number: obj.random_number,
                            bet_amount: obj.bet_amount,
                            player: obj.player,
                            bet_number: obj.bet_number,
                            is_over: obj.is_over,
                          },
                        });
                      } else if (event_name === "WinEvent") {
                        let obj = {
                          blockNumber: blockNumber,
                          player: eventValues[0],
                          is_over: eventValues[1] == 1 ? true : false,
                          random_number: eventValues[2],
                          bet_number: eventValues[3],
                          bet_amount: eventValues[4]
                            ? eventValues[4] / 10 ** 12
                            : 0,
                          win_amount: eventValues[5]
                            ? eventValues[5] / 10 ** 12
                            : 0,
                        };
                        let found = await database.WinEvent.findOne(obj);
                        if (!found) {
                          await database.WinEvent.create(obj);
                          // console.log("added WinEvent", obj);
                        }

                        return res.send({
                          status: "OK",
                          ret: {
                            is_win: true,
                            random_number: obj.random_number,
                            bet_amount: obj.bet_amount,
                            win_amount: obj.win_amount,
                            player: obj.player,
                            bet_number: obj.bet_number,
                            is_over: obj.is_over,
                          },
                        });
                      }
                    }
                  }
                }
              }
            }
          );
        }
      })
      .then((unsub) => (unsubscribe = unsub))
      .catch((error) => {
        console.error("Error:", error);
        console.log("error", error);
        return res
          .status(500)
          .json({ error: "An error occurred when finalize" });
      });
  } catch (error) {
    console.error("Error:", error);
    console.log("error", error);
    return res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/getRareWins", async (req, res) => {
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let limit = req.body.limit;
  let offset = req.body.offset;
  let sort = req.body.sort;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!sort) sort = -1;

  let data = await database.WinEvent.find({
    $where: "this.win_amount > 10 * this.bet_amount",
  })
    .sort({ blockNumber: parseInt(sort) })
    .skip(parseInt(offset))
    .limit(parseInt(limit));

  if (sort) {
    data = data
      .sort(function (a, b) {
        return parseInt(b.blockNumber) - parseInt(a.blockNumber);
      })
      .slice(0, limit);
  } else {
    data = data
      .sort(function (a, b) {
        return parseInt(a.blockNumber) - parseInt(b.blockNumber);
      })
      .slice(0, limit);
  }
  return res.send({ status: "OK", ret: data });
});

app.post("/getEvents", async (req, res) => {
  debugger;
  if (!req.body) return res.send({ status: "FAILED", message: "No Input" });
  let limit = req.body.limit;
  let offset = req.body.offset;
  let sort = req.body.sort;
  if (!limit) limit = 15;
  if (!offset) offset = 0;
  if (!sort) sort = -1;

  let data = await database.WinEvent.find()
    .sort({ blockNumber: parseInt(sort) })
    .skip(parseInt(offset))
    .limit(parseInt(limit));
  let data1 = await database.LoseEvent.find()
    .sort({ blockNumber: parseInt(sort) })
    .skip(parseInt(offset))
    .limit(parseInt(limit));

  var result = data.concat(data1);
  //console.log(player,result);
  if (sort) {
    result = result
      .sort(function (a, b) {
        return parseInt(b.blockNumber) - parseInt(a.blockNumber);
      })
      .slice(0, limit);
  } else {
    result = result
      .sort(function (a, b) {
        return parseInt(a.blockNumber) - parseInt(b.blockNumber);
      })
      .slice(0, limit);
  }
  return res.send({ status: "OK", ret: result });
});

const connectDb = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/a0bet", {
    useNewUrlParser: true,
  });
};

connectDb().then(async () => {
  let httpsServer = https.createServer(credentials, app);
  httpsServer.listen(443, () => {
    console.log(`ARTZERO API listening on port 443!`);
  });
  // await checkSBData();
  // await checkAPY();
  // //await updateSupply();
  // setInterval(checkNewTrades, 5 * 1000);
  // setInterval(checkPendingRedemption, 10 * 1000);
  // setInterval(checkSBData, 5 * 60 * 1000);
  // setInterval(checkAPY, 1 * 60 * 60 * 1000);
  // setInterval(updateSupply, 24 * 60 * 60 * 1000);
});
