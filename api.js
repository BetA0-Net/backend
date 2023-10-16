let { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
let { ContractPromise, Abi } = require("@polkadot/api-contract");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
let { contract } = require("./contracts/core_contract");
let { randomContract } = require("./contracts/rd_contract");
let {
  randomInt,
  getEstimatedGas,
  getRandomNumberByContract,
  executeRandom,
} = require("./utils");
require("dotenv").config();

/****************** Connect smartnet BETAZ ***********************/
let socket = process.env.PROVIDER_URL;
const provider = new WsProvider(socket);
const api = new ApiPromise({ provider, rpc: jsonrpc });
let betaz_core_contract;
let random_contract;
try {
  api.on("connected", () => {
    api.isReady.then(() => {
      console.log("Smartnet BETAZ Connected");
    });
  });

  api.on("ready", () => {
    console.log("Smartnet BETAZ Ready");
    const rd_contract = new ContractPromise(
      api,
      randomContract.CONTRACT_ABI,
      randomContract.CONTRACT_ADDRESS
    );
    console.log("Random Contract is ready");
    random_contract = rd_contract;

    const core_contract = new ContractPromise(
      api,
      contract.CONTRACT_ABI,
      contract.CONTRACT_ADDRESS
    );
    console.log("core Contract is ready");
    betaz_core_contract = core_contract;
  });

  api.on("error", (err) => {
    console.log("error", err);
  });
} catch (err) {
  console.log(err);
}
/****************** End connect smartnet BETAZ ***********************/

let mongoose = require("mongoose");
let database = require("./database.js");

const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
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

app.get("/api", (req, res) => {
  res.send("Wellcome BET AZ!");
});

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

  // format result
  const dataTable = result.map((result) => ({
    player: result.player,
    blockNumber: result.blockNumber,
    betAmount: result.bet_amount,
    type: result.is_over,
    prediction: result.bet_number,
    randomNumber: result.random_number,
    wonAmount: result?.win_amount || 0,
  }));

  return res.send({ status: "OK", ret: dataTable });
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

  // format result
  const dataTable = data.map((data) => ({
    player: data.player,
    blockNumber: data.blockNumber,
    betAmount: data.bet_amount,
    type: data.is_over,
    prediction: data.bet_number,
    randomNumber: data.random_number,
    wonAmount: data?.win_amount || 0,
  }));

  return res.send({ status: "OK", ret: dataTable });
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

  // format result
  const dataTable = result.map((result) => ({
    player: result.player,
    blockNumber: result.blockNumber,
    betAmount: result.bet_amount,
    type: result.is_over,
    prediction: result.bet_number,
    randomNumber: result.random_number,
    wonAmount: result?.win_amount || 0,
  }));

  return res.send({ status: "OK", ret: dataTable });
});

// finalize
app.post("/finalize", async (req, res) => {
  let { player } = req.body;
  let rd_number;

  if (!random_contract || !betaz_core_contract || !player) {
    return res.status(400).json({ error: "Invalid request" });
  }

  // handle random number
  try {
    const executeRd = await executeRandom(random_contract, player, 99);

    if (executeRd) {
      const randomNumber = await getRandomNumberByContract(
        random_contract,
        player
      );

      if (randomNumber !== null) rd_number = randomNumber;
    } else rd_number = randomInt(0, 99);
  } catch (error) {
    onsole.error("Error:", error);
    console.log("error", error);
    return res.status(500).json({ error: "An error occurred random" });
  }

  // handle finalize
  try {
    let gasLimit;
    const value = 0;

    const keyring = new Keyring({ type: "sr25519" });
    const PHRASE = process.env.PHRASE;
    const keypair = keyring.createFromUri(PHRASE);
    let unsubscribe;
    gasLimit = await getEstimatedGas(
      keypair.address,
      betaz_core_contract,
      value,
      "finalize",
      player,
      rd_number
    );

    await betaz_core_contract.tx
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
    return res.status(500).json({ error: "An error occurred finalize" });
  }
});

// send mail
const adminEmail = process.env.ADMIN_EMAIL.toString();
const adminEmailPass = process.env.ADMIN_EMAIL_PASS.toString();
app.post("/sendEmail", async (req, res) => {
  const { email, subject, text } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: adminEmail,
      pass: adminEmailPass,
    },
  });

  const mailOptions = {
    from: adminEmail,
    to: email,
    subject: subject,
    text: text,
  };

  const existingEmail = await database.EmailSubscribe.findOne({
    email: email,
  });
  if (!existingEmail) {
    await database.EmailSubscribe.create({ email });
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send({
        status: "OK",
        ret: {
          email: email,
        },
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
const DATABASE_HOST = process.env.MONGO_HOST || "127.0.0.1";
const DATABASE_PORT = process.env.MONGO_PORT || 27017;
const DATABASE_NAME = process.env.MONGO_DB_NAME;
const CONNECTION_STRING = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}`;

mongoose.set("strictQuery", false);
const connectDb = () => {
  return mongoose.connect(CONNECTION_STRING, {
    dbName: DATABASE_NAME,
    maxPoolSize: 50,
    useNewUrlParser: true,
  });
};

connectDb().then(async () => {
  let httpsServer = https.createServer(credentials, app);
  app.listen(PORT, () => {
    console.log(`BET AZ API listening on port ${PORT}!`);
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
