const contract = {
  CONTRACT_ADDRESS: "5DtW16dBAQsrddPFQ9LdkYw4D4vzFaNk6J6BKfJTbT5r54fS",
  CONTRACT_ABI: {
    source: {
      hash: "0xac8f7f7d17127525449d1d6424ebb54c662fa03e78d38e7d32aabb53d703ddae",
      language: "ink! 4.3.0",
      compiler: "rustc 1.70.0-nightly",
      build_info: {
        build_mode: "Debug",
        cargo_contract_version: "2.1.0",
        rust_toolchain: "nightly-x86_64-unknown-linux-gnu",
        wasm_opt_settings: {
          keep_debug_symbols: false,
          optimization_passes: "Z",
        },
      },
    },
    contract: {
      name: "beta0_core",
      version: "1.0.0",
      authors: ["bet_a0 <admin@betA0.net>"],
    },
    spec: {
      constructors: [
        {
          args: [
            {
              label: "max_bet_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "bet_token_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "token_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "min_over_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "max_over_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "min_under_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "max_under_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "admin_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "core_pool_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "staking_pool_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "treasury_pool_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "staking_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "treasury_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "new",
          payable: false,
          returnType: {
            displayName: ["ink_primitives", "ConstructorResult"],
            type: 8,
          },
          selector: "0x9bae9d5e",
        },
      ],
      docs: [],
      environment: {
        accountId: {
          displayName: ["AccountId"],
          type: 0,
        },
        balance: {
          displayName: ["Balance"],
          type: 7,
        },
        blockNumber: {
          displayName: ["BlockNumber"],
          type: 4,
        },
        chainExtension: {
          displayName: ["ChainExtension"],
          type: 41,
        },
        hash: {
          displayName: ["Hash"],
          type: 35,
        },
        maxEventTopics: 4,
        timestamp: {
          displayName: ["Timestamp"],
          type: 18,
        },
      },
      events: [
        {
          args: [
            {
              docs: [],
              indexed: false,
              label: "player",
              type: {
                displayName: ["Option"],
                type: 21,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 7,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "win_amount",
              type: {
                displayName: ["Balance"],
                type: 7,
              },
            },
          ],
          docs: [],
          label: "WinEvent",
        },
        {
          args: [
            {
              docs: [],
              indexed: false,
              label: "player",
              type: {
                displayName: ["Option"],
                type: 21,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 7,
              },
            },
          ],
          docs: [],
          label: "LoseEvent",
        },
        {
          args: [
            {
              docs: [],
              indexed: false,
              label: "player",
              type: {
                displayName: ["Option"],
                type: 21,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              docs: [],
              indexed: false,
              label: "bet_amount",
              type: {
                displayName: ["Balance"],
                type: 7,
              },
            },
          ],
          docs: [],
          label: "PlayEvent",
        },
      ],
      lang_error: {
        displayName: ["ink", "LangError"],
        type: 9,
      },
      messages: [
        {
          args: [
            {
              label: "max_bet_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "bet_token_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "token_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "min_over_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "max_over_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "min_under_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "max_under_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "admin_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "core_pool_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "staking_pool_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "treasury_pool_ratio",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "staking_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "treasury_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Function init"],
          label: "initialize",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xf2f6dba3",
        },
        {
          args: [
            {
              label: "bet_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
            {
              label: "is_over",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
          ],
          default: false,
          docs: [" Play"],
          label: "play",
          mutates: true,
          payable: true,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x9963949f",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Finalize Bet"],
          label: "finalize",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x40656e2b",
        },
        {
          args: [
            {
              label: "index",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "GetHoldPlayersByIndexInput1",
                ],
                type: 18,
              },
            },
          ],
          default: false,
          docs: [" Get hold players by index"],
          label: "BetA0CoreTrait::get_hold_players_by_index",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x65781383",
        },
        {
          args: [
            {
              label: "value",
              type: {
                displayName: ["beta0coretrait_external", "WithdrawTokenInput1"],
                type: 7,
              },
            },
          ],
          default: false,
          docs: [" Withdraw Token - only Owner"],
          label: "BetA0CoreTrait::withdraw_token",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xbfb04963",
        },
        {
          args: [
            {
              label: "token_ratio",
              type: {
                displayName: ["beta0coretrait_external", "SetTokenRatioInput1"],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set new token ratio"],
          label: "BetA0CoreTrait::set_token_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x2979f379",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["beta0coretrait_external", "RewardTokenInput1"],
                type: 0,
              },
            },
            {
              label: "bet_amount",
              type: {
                displayName: ["beta0coretrait_external", "RewardTokenInput2"],
                type: 7,
              },
            },
          ],
          default: false,
          docs: [" Function reward token"],
          label: "BetA0CoreTrait::reward_token",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xfbd40ec8",
        },
        {
          args: [
            {
              label: "max_bet_ratio",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMaxBetRatioInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set max bet ratio"],
          label: "BetA0CoreTrait::set_max_bet_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x5bc9734b",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetTreasuryAddressInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set treasury pool address"],
          label: "BetA0CoreTrait::set_treasury_address",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xbdb879fd",
        },
        {
          args: [
            {
              label: "bet_token_address",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetBetTokenAddressInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set new psp22 address"],
          label: "BetA0CoreTrait::set_bet_token_address",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x7b887113",
        },
        {
          args: [
            {
              label: "receiver",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "WithdrawHoldAmountInput1",
                ],
                type: 0,
              },
            },
            {
              label: "amount",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "WithdrawHoldAmountInput2",
                ],
                type: 7,
              },
            },
          ],
          default: false,
          docs: [" Withdraw hold amount"],
          label: "BetA0CoreTrait::withdraw_hold_amount",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x167480ff",
        },
        {
          args: [
            {
              label: "max_under_number",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMaxNumberUnderRollInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set max number under roll"],
          label: "BetA0CoreTrait::set_max_number_under_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xe3879fee",
        },
        {
          args: [],
          default: false,
          docs: [" Function changes state"],
          label: "BetA0CoreTrait::change_state",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x305a2c7c",
        },
        {
          args: [],
          default: false,
          docs: [" get min number under roll"],
          label: "BetA0CoreTrait::get_min_number_under_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0xa6185fcb",
        },
        {
          args: [
            {
              label: "pool",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "TranferTokenToPoolInput1",
                ],
                type: 0,
              },
            },
            {
              label: "amount",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "TranferTokenToPoolInput2",
                ],
                type: 7,
              },
            },
          ],
          default: false,
          docs: [" tranfer token to pool"],
          label: "BetA0CoreTrait::tranfer_token_to_pool",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xd455769a",
        },
        {
          args: [
            {
              label: "ratio",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetCorePoolRatioInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set core pool ratio"],
          label: "BetA0CoreTrait::set_core_pool_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x68981d7b",
        },
        {
          args: [
            {
              label: "ratio",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetTreasuryPoolRatioInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set treasury pool ratio"],
          label: "BetA0CoreTrait::set_treasury_pool_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x882f3f6c",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: ["beta0coretrait_external", "GetBetInput1"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" get bet"],
          label: "BetA0CoreTrait::get_bet",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 23,
          },
          selector: "0x0dc968b3",
        },
        {
          args: [
            {
              label: "max_over_number",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMaxNumberOverRollInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set max number over roll"],
          label: "BetA0CoreTrait::set_max_number_over_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x9943f4b5",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetStakingAddressInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set staking pool address"],
          label: "BetA0CoreTrait::set_staking_address",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xcf79cb2a",
        },
        {
          args: [],
          default: false,
          docs: [" Get core pool ratio"],
          label: "BetA0CoreTrait::get_core_pool_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0xff43351c",
        },
        {
          args: [],
          default: false,
          docs: [" Get treasury pool address"],
          label: "BetA0CoreTrait::get_treasury_address",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x0f6874b2",
        },
        {
          args: [],
          default: false,
          docs: [" Get staking pool ratio"],
          label: "BetA0CoreTrait::get_staking_pool_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0xe84e0c62",
        },
        {
          args: [],
          default: false,
          docs: [" Get token ratio"],
          label: "BetA0CoreTrait::get_token_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x5bf4a937",
        },
        {
          args: [],
          default: false,
          docs: [" Get reward pool amount"],
          label: "BetA0CoreTrait::get_reward_pool_amount",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0xfbba99aa",
        },
        {
          args: [
            {
              label: "amount",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "UpdateRewardPoolInput1",
                ],
                type: 7,
              },
            },
          ],
          default: false,
          docs: [" Update reward pool - only owner and admin"],
          label: "BetA0CoreTrait::update_reward_pool",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x60638993",
        },
        {
          args: [
            {
              label: "min_under_number",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMinNumberUnderRollInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set min number under roll"],
          label: "BetA0CoreTrait::set_min_number_under_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xfbed57ce",
        },
        {
          args: [
            {
              label: "pool",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "GetTokenBalancePoolInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" get token balance pool"],
          label: "BetA0CoreTrait::get_token_balance_pool",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0x4fb01e84",
        },
        {
          args: [],
          default: false,
          docs: [" Get treasury pool amount"],
          label: "BetA0CoreTrait::get_treasury_pool_amount",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0xf9424e8e",
        },
        {
          args: [
            {
              label: "value",
              type: {
                displayName: ["beta0coretrait_external", "WithdrawFeeInput1"],
                type: 7,
              },
            },
          ],
          default: false,
          docs: [" Withdraw Fees - only Owner"],
          label: "BetA0CoreTrait::withdraw_fee",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xb1aed1dc",
        },
        {
          args: [
            {
              label: "address",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "GetHoldAmountPlayersInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Get hold amount players"],
          label: "BetA0CoreTrait::get_hold_amount_players",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 27,
          },
          selector: "0xcbf00dde",
        },
        {
          args: [],
          default: false,
          docs: [" Get Hold Player Count"],
          label: "BetA0CoreTrait::get_hold_bidder_count",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 29,
          },
          selector: "0x2c55007a",
        },
        {
          args: [],
          default: false,
          docs: [" Get psp22 address"],
          label: "BetA0CoreTrait::bet_token_address",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 30,
          },
          selector: "0x45b373ac",
        },
        {
          args: [],
          default: false,
          docs: [" Get Over Rates"],
          label: "BetA0CoreTrait::get_over_rates",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 31,
          },
          selector: "0x0712d707",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "BetA0CoreTrait::get_max_bet",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0x93aa56df",
        },
        {
          args: [],
          default: false,
          docs: [" Get Max Bet"],
          label: "BetA0CoreTrait::get_max_bet_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0xb18a8f89",
        },
        {
          args: [],
          default: false,
          docs: [" get max number under roll"],
          label: "BetA0CoreTrait::get_max_number_under_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x9f571242",
        },
        {
          args: [],
          default: false,
          docs: [" get contract token balance"],
          label: "BetA0CoreTrait::get_token_balance",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0x9ed23743",
        },
        {
          args: [
            {
              label: "over_rates",
              type: {
                displayName: ["beta0coretrait_external", "SetRatesInput1"],
                type: 6,
              },
            },
            {
              label: "under_rates",
              type: {
                displayName: ["beta0coretrait_external", "SetRatesInput2"],
                type: 6,
              },
            },
          ],
          default: false,
          docs: [
            " Set over_rates and discount rate - Only Owner 2 vectors same size",
          ],
          label: "BetA0CoreTrait::set_rates",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x62500603",
        },
        {
          args: [],
          default: false,
          docs: [" Update core pool - only owner and admin"],
          label: "BetA0CoreTrait::update_core_pool",
          mutates: true,
          payable: true,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xf9dc2460",
        },
        {
          args: [
            {
              label: "min_over_number",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetMinNumberOverRollInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set min number over roll"],
          label: "BetA0CoreTrait::set_min_number_over_roll",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x49094f28",
        },
        {
          args: [
            {
              label: "admin_account",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetAdminAccountInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Set admin id"],
          label: "BetA0CoreTrait::set_admin_account",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0xd7ab667f",
        },
        {
          args: [
            {
              label: "ratio",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "SetStakingPoolRatioInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [" Set staking pool ratio"],
          label: "BetA0CoreTrait::set_staking_pool_ratio",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x0e28e5a6",
        },
        {
          args: [],
          default: false,
          docs: [" get min number over roll"],
          label: "BetA0CoreTrait::get_min_number_over_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0xfc8a4a50",
        },
        {
          args: [],
          default: false,
          docs: [" Get Under Rates"],
          label: "BetA0CoreTrait::get_under_rates",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 31,
          },
          selector: "0x657dfccb",
        },
        {
          args: [
            {
              label: "player",
              type: {
                displayName: [
                  "beta0coretrait_external",
                  "IsBetAvailableInput1",
                ],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [" Is bet exist"],
          label: "BetA0CoreTrait::is_bet_available",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 32,
          },
          selector: "0xd36f536e",
        },
        {
          args: [],
          default: false,
          docs: [" get admin id"],
          label: "BetA0CoreTrait::get_admin_account",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 30,
          },
          selector: "0x04747907",
        },
        {
          args: [],
          default: false,
          docs: [" get max number over roll"],
          label: "BetA0CoreTrait::get_max_number_over_roll",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x78687252",
        },
        {
          args: [],
          default: false,
          docs: [" Get staking pool address"],
          label: "BetA0CoreTrait::get_staking_address",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x566725c2",
        },
        {
          args: [],
          default: false,
          docs: [" Get core pool amout"],
          label: "BetA0CoreTrait::get_core_pool_amout",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0x35014602",
        },
        {
          args: [],
          default: false,
          docs: [" Get staking pool amount"],
          label: "BetA0CoreTrait::get_staking_pool_amount",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0x641fd73d",
        },
        {
          args: [],
          default: false,
          docs: [" get balance contract"],
          label: "BetA0CoreTrait::balance_of",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 26,
          },
          selector: "0x97dacaa6",
        },
        {
          args: [],
          default: false,
          docs: [" Get treasury pool ratio"],
          label: "BetA0CoreTrait::get_treasury_pool_ratio",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x91e985a3",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "Ownable::owner",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x4fa43c8c",
        },
        {
          args: [
            {
              label: "new_owner",
              type: {
                displayName: ["ownable_external", "TransferOwnershipInput1"],
                type: 21,
              },
            },
          ],
          default: false,
          docs: [],
          label: "Ownable::transfer_ownership",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 33,
          },
          selector: "0x11f43efd",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "Ownable::renounce_ownership",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 33,
          },
          selector: "0x5e228753",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "Pausable::paused",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 32,
          },
          selector: "0xd123ce11",
        },
        {
          args: [
            {
              label: "new_code_hash",
              type: {
                displayName: ["upgradeable_external", "SetCodeHashInput1"],
                type: 35,
              },
            },
          ],
          default: false,
          docs: [],
          label: "Upgradeable::set_code_hash",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 36,
          },
          selector: "0x1700ae80",
        },
        {
          args: [
            {
              label: "role",
              type: {
                displayName: ["accesscontrol_external", "RevokeRoleInput1"],
                type: 4,
              },
            },
            {
              label: "account",
              type: {
                displayName: ["accesscontrol_external", "RevokeRoleInput2"],
                type: 21,
              },
            },
          ],
          default: false,
          docs: [],
          label: "AccessControl::revoke_role",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 39,
          },
          selector: "0x6e4f0991",
        },
        {
          args: [
            {
              label: "role",
              type: {
                displayName: ["accesscontrol_external", "RenounceRoleInput1"],
                type: 4,
              },
            },
            {
              label: "account",
              type: {
                displayName: ["accesscontrol_external", "RenounceRoleInput2"],
                type: 21,
              },
            },
          ],
          default: false,
          docs: [],
          label: "AccessControl::renounce_role",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 39,
          },
          selector: "0xeaf1248a",
        },
        {
          args: [
            {
              label: "role",
              type: {
                displayName: ["accesscontrol_external", "HasRoleInput1"],
                type: 4,
              },
            },
            {
              label: "address",
              type: {
                displayName: ["accesscontrol_external", "HasRoleInput2"],
                type: 21,
              },
            },
          ],
          default: false,
          docs: [],
          label: "AccessControl::has_role",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 32,
          },
          selector: "0xc1d9ac18",
        },
        {
          args: [
            {
              label: "role",
              type: {
                displayName: ["accesscontrol_external", "GetRoleAdminInput1"],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [],
          label: "AccessControl::get_role_admin",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0x83da3bb2",
        },
        {
          args: [
            {
              label: "role",
              type: {
                displayName: ["accesscontrol_external", "GrantRoleInput1"],
                type: 4,
              },
            },
            {
              label: "account",
              type: {
                displayName: ["accesscontrol_external", "GrantRoleInput2"],
                type: 21,
              },
            },
          ],
          default: false,
          docs: [],
          label: "AccessControl::grant_role",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 39,
          },
          selector: "0x4ac062fd",
        },
        {
          args: [
            {
              label: "role",
              type: {
                displayName: [
                  "accesscontrolenumerable_external",
                  "GetRoleMemberInput1",
                ],
                type: 4,
              },
            },
            {
              label: "index",
              type: {
                displayName: [
                  "accesscontrolenumerable_external",
                  "GetRoleMemberInput2",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [],
          label: "AccessControlEnumerable::get_role_member",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 20,
          },
          selector: "0x163469e0",
        },
        {
          args: [
            {
              label: "role",
              type: {
                displayName: [
                  "accesscontrolenumerable_external",
                  "GetRoleMemberCountInput1",
                ],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [],
          label: "AccessControlEnumerable::get_role_member_count",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 22,
          },
          selector: "0xf1b1a9d7",
        },
      ],
    },
    storage: {
      root: {
        layout: {
          struct: {
            fields: [
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              enum: {
                                dispatchKey: "0x6f713913",
                                name: "Option",
                                variants: {
                                  0: {
                                    fields: [],
                                    name: "None",
                                  },
                                  1: {
                                    fields: [
                                      {
                                        layout: {
                                          leaf: {
                                            key: "0x6f713913",
                                            ty: 0,
                                          },
                                        },
                                        name: "0",
                                      },
                                    ],
                                    name: "Some",
                                  },
                                },
                              },
                            },
                            root_key: "0x6f713913",
                          },
                        },
                        name: "owner",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "ownable",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0xec3485f7",
                                ty: 3,
                              },
                            },
                            root_key: "0xec3485f7",
                          },
                        },
                        name: "paused",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "pausable",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x1f2cf4ac",
                                ty: 4,
                              },
                            },
                            root_key: "0x1f2cf4ac",
                          },
                        },
                        name: "admin_roles",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x8150f558",
                                ty: 5,
                              },
                            },
                            root_key: "0x8150f558",
                          },
                        },
                        name: "members",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "access",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x1eb9f2a8",
                                ty: 4,
                              },
                            },
                            root_key: "0x1eb9f2a8",
                          },
                        },
                        name: "admin_roles",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              enum: {
                                dispatchKey: "0x869d6fc0",
                                name: "Option",
                                variants: {
                                  0: {
                                    fields: [],
                                    name: "None",
                                  },
                                  1: {
                                    fields: [
                                      {
                                        layout: {
                                          leaf: {
                                            key: "0x869d6fc0",
                                            ty: 0,
                                          },
                                        },
                                        name: "0",
                                      },
                                    ],
                                    name: "Some",
                                  },
                                },
                              },
                            },
                            root_key: "0x869d6fc0",
                          },
                        },
                        name: "role_members",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "enumerable",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 6,
                          },
                        },
                        name: "over_rates",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 6,
                          },
                        },
                        name: "under_rates",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "max_bet_ratio",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "bet_token_address",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "token_ratio",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              struct: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0xf5c3fa2a",
                                        ty: 2,
                                      },
                                    },
                                    name: "is_over",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0xf5c3fa2a",
                                        ty: 4,
                                      },
                                    },
                                    name: "bet_number",
                                  },
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0xf5c3fa2a",
                                        ty: 7,
                                      },
                                    },
                                    name: "bet_amount",
                                  },
                                ],
                                name: "BetInformation",
                              },
                            },
                            root_key: "0xf5c3fa2a",
                          },
                        },
                        name: "bets",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "admin_address",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "min_over_number",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "max_over_number",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "min_under_number",
                      },
                      {
                        layout: {
                          leaf: {
                            key: "0x00000000",
                            ty: 4,
                          },
                        },
                        name: "max_under_number",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x81d019cc",
                                ty: 7,
                              },
                            },
                            root_key: "0x81d019cc",
                          },
                        },
                        name: "hold_amount_players",
                      },
                      {
                        layout: {
                          root: {
                            layout: {
                              leaf: {
                                key: "0x03bea4fa",
                                ty: 0,
                              },
                            },
                            root_key: "0x03bea4fa",
                          },
                        },
                        name: "hold_players",
                      },
                      {
                        layout: {
                          struct: {
                            fields: [
                              {
                                layout: {
                                  leaf: {
                                    key: "0x00000000",
                                    ty: 4,
                                  },
                                },
                                name: "core_pool_ratio",
                              },
                              {
                                layout: {
                                  leaf: {
                                    key: "0x00000000",
                                    ty: 4,
                                  },
                                },
                                name: "staking_pool_ratio",
                              },
                              {
                                layout: {
                                  leaf: {
                                    key: "0x00000000",
                                    ty: 4,
                                  },
                                },
                                name: "treasury_pool_ratio",
                              },
                              {
                                layout: {
                                  leaf: {
                                    key: "0x00000000",
                                    ty: 7,
                                  },
                                },
                                name: "core_pool_amout",
                              },
                              {
                                layout: {
                                  leaf: {
                                    key: "0x00000000",
                                    ty: 7,
                                  },
                                },
                                name: "reward_pool_amount",
                              },
                              {
                                layout: {
                                  leaf: {
                                    key: "0x00000000",
                                    ty: 7,
                                  },
                                },
                                name: "staking_pool_amount",
                              },
                              {
                                layout: {
                                  leaf: {
                                    key: "0x00000000",
                                    ty: 7,
                                  },
                                },
                                name: "treasury_pool_amount",
                              },
                              {
                                layout: {
                                  enum: {
                                    dispatchKey: "0x00000000",
                                    name: "Option",
                                    variants: {
                                      0: {
                                        fields: [],
                                        name: "None",
                                      },
                                      1: {
                                        fields: [
                                          {
                                            layout: {
                                              leaf: {
                                                key: "0x00000000",
                                                ty: 0,
                                              },
                                            },
                                            name: "0",
                                          },
                                        ],
                                        name: "Some",
                                      },
                                    },
                                  },
                                },
                                name: "staking_address",
                              },
                              {
                                layout: {
                                  enum: {
                                    dispatchKey: "0x00000000",
                                    name: "Option",
                                    variants: {
                                      0: {
                                        fields: [],
                                        name: "None",
                                      },
                                      1: {
                                        fields: [
                                          {
                                            layout: {
                                              leaf: {
                                                key: "0x00000000",
                                                ty: 0,
                                              },
                                            },
                                            name: "0",
                                          },
                                        ],
                                        name: "Some",
                                      },
                                    },
                                  },
                                },
                                name: "treasury_address",
                              },
                            ],
                            name: "PoolManager",
                          },
                        },
                        name: "pool_manager",
                      },
                      {
                        layout: {
                          enum: {
                            dispatchKey: "0x00000000",
                            name: "Option",
                            variants: {
                              0: {
                                fields: [],
                                name: "None",
                              },
                              1: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x00000000",
                                        ty: 5,
                                      },
                                    },
                                    name: "0",
                                  },
                                ],
                                name: "Some",
                              },
                            },
                          },
                        },
                        name: "_reserved",
                      },
                    ],
                    name: "Manager",
                  },
                },
                name: "manager",
              },
              {
                layout: {
                  struct: {
                    fields: [
                      {
                        layout: {
                          enum: {
                            dispatchKey: "0x00000000",
                            name: "Option",
                            variants: {
                              0: {
                                fields: [],
                                name: "None",
                              },
                              1: {
                                fields: [
                                  {
                                    layout: {
                                      leaf: {
                                        key: "0x00000000",
                                        ty: 5,
                                      },
                                    },
                                    name: "0",
                                  },
                                ],
                                name: "Some",
                              },
                            },
                          },
                        },
                        name: "_reserved",
                      },
                    ],
                    name: "Data",
                  },
                },
                name: "admin_data",
              },
            ],
            name: "BetA0CoreContract",
          },
        },
        root_key: "0x00000000",
      },
    },
    types: [
      {
        id: 0,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 1,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "AccountId"],
        },
      },
      {
        id: 1,
        type: {
          def: {
            array: {
              len: 32,
              type: 2,
            },
          },
        },
      },
      {
        id: 2,
        type: {
          def: {
            primitive: "u8",
          },
        },
      },
      {
        id: 3,
        type: {
          def: {
            primitive: "bool",
          },
        },
      },
      {
        id: 4,
        type: {
          def: {
            primitive: "u32",
          },
        },
      },
      {
        id: 5,
        type: {
          def: {
            tuple: [],
          },
        },
      },
      {
        id: 6,
        type: {
          def: {
            sequence: {
              type: 4,
            },
          },
        },
      },
      {
        id: 7,
        type: {
          def: {
            primitive: "u128",
          },
        },
      },
      {
        id: 8,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 5,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 5,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 9,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 1,
                  name: "CouldNotReadInput",
                },
              ],
            },
          },
          path: ["ink_primitives", "LangError"],
        },
      },
      {
        id: 10,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 11,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 11,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 11,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 5,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 12,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 5,
            },
            {
              name: "E",
              type: 12,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 12,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "String",
                    },
                  ],
                  index: 0,
                  name: "Custom",
                },
                {
                  index: 1,
                  name: "OnlyOwner",
                },
                {
                  index: 2,
                  name: "OnlyAdmin",
                },
                {
                  index: 3,
                  name: "InvalidCaller",
                },
                {
                  index: 4,
                  name: "OnlyMinterCanMint",
                },
                {
                  index: 5,
                  name: "NotApproved",
                },
                {
                  index: 6,
                  name: "CannotTransfer",
                },
                {
                  index: 7,
                  name: "CannotMint",
                },
                {
                  index: 8,
                  name: "InvalidBuyTokensStatus",
                },
                {
                  index: 9,
                  name: "InsufficientAllowanceToLend",
                },
                {
                  index: 10,
                  name: "NotEnoughBalance",
                },
                {
                  index: 11,
                  name: "WithdrawFeeError",
                },
                {
                  index: 12,
                  name: "MaxBuyTokenAmount",
                },
                {
                  index: 13,
                  name: "TokensCanNotPurchased",
                },
                {
                  index: 14,
                  name: "TransferFailed",
                },
                {
                  index: 15,
                  name: "AlreadyInit",
                },
                {
                  index: 16,
                  name: "NotOwner",
                },
                {
                  index: 17,
                  name: "BetNotFinalized",
                },
                {
                  index: 18,
                  name: "CallerIsNotAdmin",
                },
                {
                  index: 19,
                  name: "InvalidInput",
                },
                {
                  index: 20,
                  name: "BetNotExist",
                },
                {
                  index: 21,
                  name: "HoldAmountPlayerNotExist",
                },
                {
                  index: 22,
                  name: "NoAmount",
                },
                {
                  index: 23,
                  name: "InvalidBalanceAndAllowance",
                },
                {
                  index: 24,
                  name: "InvalidUnstakedAmount",
                },
                {
                  index: 25,
                  name: "NotTimeToUnstaked",
                },
                {
                  index: 26,
                  name: "NoStakerFound",
                },
                {
                  index: 27,
                  name: "NotStaked",
                },
                {
                  index: 28,
                  name: "InvalidTotalStake",
                },
                {
                  index: 29,
                  name: "CallerNotRequestUnstake",
                },
                {
                  index: 30,
                  name: "ClaimMustBeFalse",
                },
                {
                  index: 31,
                  name: "RewardStarted",
                },
                {
                  index: 32,
                  name: "RewardNotStarted",
                },
                {
                  index: 33,
                  name: "InvalidInputRatio",
                },
                {
                  index: 34,
                  name: "NotTimeBuyToken",
                },
                {
                  index: 35,
                  name: "CannotBuyAtThisTime",
                },
                {
                  fields: [
                    {
                      type: 14,
                      typeName: "OwnableError",
                    },
                  ],
                  index: 36,
                  name: "OwnableError",
                },
                {
                  fields: [
                    {
                      type: 15,
                      typeName: "AccessControlError",
                    },
                  ],
                  index: 37,
                  name: "AccessControlError",
                },
                {
                  fields: [
                    {
                      type: 16,
                      typeName: "PSP22Error",
                    },
                  ],
                  index: 38,
                  name: "PSP22Error",
                },
                {
                  fields: [
                    {
                      type: 19,
                      typeName: "PausableError",
                    },
                  ],
                  index: 39,
                  name: "PausableError",
                },
                {
                  index: 40,
                  name: "CheckedOperations",
                },
              ],
            },
          },
          path: ["bet_a0", "traits", "error", "Error"],
        },
      },
      {
        id: 13,
        type: {
          def: {
            primitive: "str",
          },
        },
      },
      {
        id: 14,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "CallerIsNotOwner",
                },
                {
                  index: 1,
                  name: "NewOwnerIsNotSet",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "ownable",
            "OwnableError",
          ],
        },
      },
      {
        id: 15,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "InvalidCaller",
                },
                {
                  index: 1,
                  name: "MissingRole",
                },
                {
                  index: 2,
                  name: "RoleRedundant",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "access_control",
            "AccessControlError",
          ],
        },
      },
      {
        id: 16,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "String",
                    },
                  ],
                  index: 0,
                  name: "Custom",
                },
                {
                  index: 1,
                  name: "InsufficientBalance",
                },
                {
                  index: 2,
                  name: "InsufficientAllowance",
                },
                {
                  index: 3,
                  name: "RecipientIsNotSet",
                },
                {
                  index: 4,
                  name: "SenderIsNotSet",
                },
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "String",
                    },
                  ],
                  index: 5,
                  name: "SafeTransferCheckFailed",
                },
                {
                  index: 6,
                  name: "PermitInvalidSignature",
                },
                {
                  index: 7,
                  name: "PermitExpired",
                },
                {
                  fields: [
                    {
                      type: 17,
                      typeName: "NoncesError",
                    },
                  ],
                  index: 8,
                  name: "NoncesError",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "psp22",
            "PSP22Error",
          ],
        },
      },
      {
        id: 17,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 0,
                      typeName: "AccountId",
                    },
                    {
                      type: 18,
                      typeName: "u64",
                    },
                  ],
                  index: 0,
                  name: "InvalidAccountNonce",
                },
                {
                  index: 1,
                  name: "NonceOverflow",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "nonces",
            "NoncesError",
          ],
        },
      },
      {
        id: 18,
        type: {
          def: {
            primitive: "u64",
          },
        },
      },
      {
        id: 19,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "Paused",
                },
                {
                  index: 1,
                  name: "NotPaused",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "pausable",
            "PausableError",
          ],
        },
      },
      {
        id: 20,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 21,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 21,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 21,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 0,
                    },
                  ],
                  index: 1,
                  name: "Some",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 0,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 22,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 4,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 4,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 23,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 24,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 24,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 24,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 25,
                    },
                  ],
                  index: 1,
                  name: "Some",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 25,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 25,
        type: {
          def: {
            composite: {
              fields: [
                {
                  name: "is_over",
                  type: 2,
                  typeName: "u8",
                },
                {
                  name: "bet_number",
                  type: 4,
                  typeName: "u32",
                },
                {
                  name: "bet_amount",
                  type: 7,
                  typeName: "Balance",
                },
              ],
            },
          },
          path: ["bet_a0", "impls", "beta0_core", "data", "BetInformation"],
        },
      },
      {
        id: 26,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 27,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 28,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 28,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 28,
        type: {
          def: {
            variant: {
              variants: [
                {
                  index: 0,
                  name: "None",
                },
                {
                  fields: [
                    {
                      type: 7,
                    },
                  ],
                  index: 1,
                  name: "Some",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 7,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 29,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 18,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 18,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 30,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 0,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 0,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 31,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 6,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 6,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 32,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 3,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 3,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 33,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 34,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 34,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 34,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 5,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 14,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 5,
            },
            {
              name: "E",
              type: 14,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 35,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 1,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "Hash"],
        },
      },
      {
        id: 36,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 37,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 37,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 37,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 5,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 38,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 5,
            },
            {
              name: "E",
              type: 38,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 38,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 13,
                      typeName: "String",
                    },
                  ],
                  index: 0,
                  name: "Custom",
                },
                {
                  index: 1,
                  name: "SetCodeHashFailed",
                },
                {
                  fields: [
                    {
                      type: 14,
                      typeName: "OwnableError",
                    },
                  ],
                  index: 2,
                  name: "OwnableError",
                },
                {
                  fields: [
                    {
                      type: 15,
                      typeName: "AccessControlError",
                    },
                  ],
                  index: 3,
                  name: "AccessControlError",
                },
              ],
            },
          },
          path: [
            "openbrush_contracts",
            "traits",
            "errors",
            "upgradeable",
            "UpgradeableError",
          ],
        },
      },
      {
        id: 39,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 40,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 40,
            },
            {
              name: "E",
              type: 9,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 40,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 5,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 15,
                    },
                  ],
                  index: 1,
                  name: "Err",
                },
              ],
            },
          },
          params: [
            {
              name: "T",
              type: 5,
            },
            {
              name: "E",
              type: 15,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 41,
        type: {
          def: {
            variant: {},
          },
          path: ["ink_env", "types", "NoChainExtension"],
        },
      },
    ],
    version: "4",
  },
};

module.exports = {
  contract: contract,
};
