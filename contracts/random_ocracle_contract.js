const randomContract = {
  CONTRACT_ADDRESS: "5HJK4DunhQD82uaVn2rN1C12RajSRjpyyZtMzTJ4TdF6mQDq",
  CONTRACT_ABI: {
    source: {
      hash: "0x9e81f1fe42ebaa45780d4561c86c63f4b023468dc6663c282b9e857ad6fb80fd",
      language: "ink! 4.3.0",
      compiler: "rustc 1.75.0-nightly",
      build_info: {
        build_mode: "Debug",
        cargo_contract_version: "3.2.0",
        rust_toolchain: "nightly-x86_64-unknown-linux-gnu",
        wasm_opt_settings: {
          keep_debug_symbols: false,
          optimization_passes: "Z",
        },
      },
    },
    contract: {
      name: "dia-oracle-example-randomness",
      version: "0.1.0",
      authors: ["nitin.gurbani@diadata.org"],
    },
    spec: {
      constructors: [
        {
          args: [
            {
              label: "oracle_address",
              type: {
                displayName: ["AccountId"],
                type: 0,
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
              label: "tmp",
              type: {
                displayName: ["u64"],
                type: 3,
              },
            },
          ],
          default: false,
          docs: [],
          label: "new",
          payable: false,
          returnType: {
            displayName: ["ink_primitives", "ConstructorResult"],
            type: 4,
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
          type: 20,
        },
        blockNumber: {
          displayName: ["BlockNumber"],
          type: 22,
        },
        chainExtension: {
          displayName: ["ChainExtension"],
          type: 23,
        },
        hash: {
          displayName: ["Hash"],
          type: 21,
        },
        maxEventTopics: 4,
        timestamp: {
          displayName: ["Timestamp"],
          type: 3,
        },
      },
      events: [
        {
          args: [
            {
              docs: [],
              indexed: true,
              label: "player",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
            {
              docs: [],
              indexed: true,
              label: "random_number",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
            {
              docs: [],
              indexed: true,
              label: "bet_number",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
          ],
          docs: [],
          label: "Random",
        },
      ],
      lang_error: {
        displayName: ["ink", "LangError"],
        type: 6,
      },
      messages: [
        {
          args: [
            {
              label: "account_id",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "transfer_ownership",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 7,
          },
          selector: "0x107e33ea",
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
              label: "max_value",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
            {
              label: "bet_number",
              type: {
                displayName: ["u8"],
                type: 2,
              },
            },
          ],
          default: false,
          docs: [],
          label: "random_number",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 7,
          },
          selector: "0xe512c463",
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
          ],
          default: false,
          docs: [],
          label: "commit_player",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 7,
          },
          selector: "0xd4770c58",
        },
        {
          args: [
            {
              label: "account_id",
              type: {
                displayName: ["AccountId"],
                type: 0,
              },
            },
          ],
          default: false,
          docs: [],
          label: "set_admin",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 7,
          },
          selector: "0x798dcad5",
        },
        {
          args: [
            {
              label: "tmp",
              type: {
                displayName: ["u64"],
                type: 3,
              },
            },
          ],
          default: false,
          docs: [],
          label: "set_tmp",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 7,
          },
          selector: "0xcd49cf32",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "get_admin",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 10,
          },
          selector: "0x57b8a8a7",
        },
        {
          args: [
            {
              label: "key",
              type: {
                displayName: ["u64"],
                type: 3,
              },
            },
          ],
          default: false,
          docs: [],
          label: "get",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 12,
          },
          selector: "0x2f865bd9",
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
          ],
          default: false,
          docs: [],
          label: "get_random_value_for_player",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 15,
          },
          selector: "0xcfeabaa1",
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
          ],
          default: false,
          docs: [],
          label: "get_last_round_for_player",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 17,
          },
          selector: "0x3623c777",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "get_tmp",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 19,
          },
          selector: "0x46e85079",
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
                          leaf: {
                            key: "0x00000000",
                            ty: 0,
                          },
                        },
                        name: "account_id",
                      },
                    ],
                    name: "__ink_TraitCallBuilderRandomOracleGetter",
                  },
                },
                name: "oracle",
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
                name: "admin_address",
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
                name: "owner",
              },
              {
                layout: {
                  root: {
                    layout: {
                      leaf: {
                        key: "0xaeb82c47",
                        ty: 2,
                      },
                    },
                    root_key: "0xaeb82c47",
                  },
                },
                name: "randoms",
              },
              {
                layout: {
                  leaf: {
                    key: "0x00000000",
                    ty: 3,
                  },
                },
                name: "tmp",
              },
              {
                layout: {
                  root: {
                    layout: {
                      leaf: {
                        key: "0xb7d956f8",
                        ty: 3,
                      },
                    },
                    root_key: "0xb7d956f8",
                  },
                },
                name: "latest_round",
              },
            ],
            name: "RandomOracleExample",
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
            primitive: "u64",
          },
        },
      },
      {
        id: 4,
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
                      type: 6,
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
              type: 6,
            },
          ],
          path: ["Result"],
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
        id: 7,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 8,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 6,
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
              type: 8,
            },
            {
              name: "E",
              type: 6,
            },
          ],
          path: ["Result"],
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
                  index: 0,
                  name: "CallerIsNotOwner",
                },
                {
                  index: 1,
                  name: "CallerIsNotAdmin",
                },
                {
                  index: 2,
                  name: "PlayerNotExist",
                },
              ],
            },
          },
          path: [
            "dia_oracle_example_randomness",
            "randomoracleexample",
            "Error",
          ],
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
                      type: 6,
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
              type: 6,
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
        id: 12,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 13,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 6,
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
              type: 13,
            },
            {
              name: "E",
              type: 6,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 13,
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
                      type: 14,
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
              type: 14,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 14,
        type: {
          def: {
            sequence: {
              type: 2,
            },
          },
        },
      },
      {
        id: 15,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 16,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 6,
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
              type: 16,
            },
            {
              name: "E",
              type: 6,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 16,
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
                      type: 2,
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
              type: 2,
            },
          ],
          path: ["Option"],
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
                      type: 18,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 6,
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
              type: 6,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 18,
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
                      type: 3,
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
              type: 3,
            },
          ],
          path: ["Option"],
        },
      },
      {
        id: 19,
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
                      type: 6,
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
              type: 6,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 20,
        type: {
          def: {
            primitive: "u128",
          },
        },
      },
      {
        id: 21,
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
        id: 22,
        type: {
          def: {
            primitive: "u32",
          },
        },
      },
      {
        id: 23,
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
  randomContract: randomContract,
};
