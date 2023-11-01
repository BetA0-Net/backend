let mongoose = require("mongoose");

const WinEventSchema = new mongoose.Schema({
  blockNumber: {
    type: Number,
  },
  player: {
    type: String,
  },
  is_over: {
    type: Boolean,
  },
  random_number: {
    type: Number,
  },
  bet_number: {
    type: Number,
  },
  bet_amount: {
    type: Number,
  },
  win_amount: {
    type: Number,
  },
  oracle_round: {
    type: Number,
  },
});
const LoseEventSchema = new mongoose.Schema({
  blockNumber: {
    type: Number,
  },
  player: {
    type: String,
  },
  is_over: {
    type: Boolean,
  },
  random_number: {
    type: Number,
  },
  bet_number: {
    type: Number,
  },
  bet_amount: {
    type: Number,
  },
  oracle_round: {
    type: Number,
  },
});
const ScannedBlocksSchema = new mongoose.Schema({
  lastScanned: {
    type: Boolean,
  },
  blockNumber: {
    type: Number,
  },
});
const EmailSubscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
  },
  { timestamps: true }
);
const PendingUnstakeSchema = new mongoose.Schema({
  caller: {
    type: String,
  },
  amount: {
    type: Number,
  },
  time: {
    type: Number,
  },
});
module.exports = {
  ScannedBlocks: mongoose.model("ScannedBlocks", ScannedBlocksSchema),
  LoseEvent: mongoose.model("LoseEvent", LoseEventSchema),
  WinEvent: mongoose.model("WinEvent", WinEventSchema),
  EmailSubscribe: mongoose.model("EmailSubscribe", EmailSubscribeSchema),
  PendingUnstake: mongoose.model("PendingUnstake", PendingUnstakeSchema),
};
