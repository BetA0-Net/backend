const randomContract = {
  CONTRACT_ADDRESS: "apgMv5KdMaNpBfQ52D1Pq7fiCKjP478bZcFnAo9Ko2ZwKmy",
  CONTRACT_ABI: {
    source: {
      hash: "0x26ae82e728dcf3bb0972beb7335a144138dc89dce9bef294c61ea50c3385997f",
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
      name: "random_number_generator_contract",
      version: "1.0.0",
      authors: ["bet_a0 <admin@betA0.net>"],
    },
    spec: {
      constructors: [
        {
          args: [
            {
              label: "admin_address",
              type: {
                displayName: ["AccountId"],
                type: 2,
              },
            },
          ],
          default: false,
          docs: [],
          label: "new",
          payable: false,
          returnType: {
            displayName: ["ink_primitives", "ConstructorResult"],
            type: 5,
          },
          selector: "0x9bae9d5e",
        },
      ],
      docs: [],
      environment: {
        accountId: {
          displayName: ["AccountId"],
          type: 2,
        },
        balance: {
          displayName: ["Balance"],
          type: 15,
        },
        blockNumber: {
          displayName: ["BlockNumber"],
          type: 1,
        },
        chainExtension: {
          displayName: ["ChainExtension"],
          type: 17,
        },
        hash: {
          displayName: ["Hash"],
          type: 16,
        },
        maxEventTopics: 4,
        timestamp: {
          displayName: ["Timestamp"],
          type: 0,
        },
      },
      events: [
        {
          args: [
            {
              docs: [],
              indexed: true,
              label: "time_stamp",
              type: {
                displayName: ["Timestamp"],
                type: 0,
              },
            },
            {
              docs: [],
              indexed: true,
              label: "request_id",
              type: {
                displayName: ["u64"],
                type: 0,
              },
            },
            {
              docs: [],
              indexed: true,
              label: "random_number",
              type: {
                displayName: ["u32"],
                type: 1,
              },
            },
          ],
          docs: [],
          label: "Random",
        },
      ],
      lang_error: {
        displayName: ["ink", "LangError"],
        type: 7,
      },
      messages: [
        {
          args: [
            {
              label: "max_value",
              type: {
                displayName: ["u8"],
                type: 4,
              },
            },
          ],
          default: false,
          docs: [],
          label: "random",
          mutates: true,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 8,
          },
          selector: "0xca976ce8",
        },
        {
          args: [
            {
              label: "account_id",
              type: {
                displayName: ["AccountId"],
                type: 2,
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
            type: 8,
          },
          selector: "0x107e33ea",
        },
        {
          args: [
            {
              label: "account_id",
              type: {
                displayName: ["AccountId"],
                type: 2,
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
            type: 8,
          },
          selector: "0x798dcad5",
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
            type: 11,
          },
          selector: "0x57b8a8a7",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "get_last_request_id",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0xa5222c7d",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "get_last_time_stamp_random",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 13,
          },
          selector: "0x32364da2",
        },
        {
          args: [],
          default: false,
          docs: [],
          label: "get_last_rand_rumber",
          mutates: false,
          payable: false,
          returnType: {
            displayName: ["ink", "MessageResult"],
            type: 14,
          },
          selector: "0xf19e9b85",
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
                  leaf: {
                    key: "0x00000000",
                    ty: 0,
                  },
                },
                name: "salt",
              },
              {
                layout: {
                  leaf: {
                    key: "0x00000000",
                    ty: 0,
                  },
                },
                name: "time_stamp",
              },
              {
                layout: {
                  leaf: {
                    key: "0x00000000",
                    ty: 0,
                  },
                },
                name: "request_id",
              },
              {
                layout: {
                  leaf: {
                    key: "0x00000000",
                    ty: 1,
                  },
                },
                name: "random_number",
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
                                ty: 2,
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
                                ty: 2,
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
            ],
            name: "RandomNumberGeneratorContract",
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
            primitive: "u64",
          },
        },
      },
      {
        id: 1,
        type: {
          def: {
            primitive: "u32",
          },
        },
      },
      {
        id: 2,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 3,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "AccountId"],
        },
      },
      {
        id: 3,
        type: {
          def: {
            array: {
              len: 32,
              type: 4,
            },
          },
        },
      },
      {
        id: 4,
        type: {
          def: {
            primitive: "u8",
          },
        },
      },
      {
        id: 5,
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
                      type: 7,
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
              type: 7,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 6,
        type: {
          def: {
            tuple: [],
          },
        },
      },
      {
        id: 7,
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
        id: 8,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 9,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 7,
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
              type: 9,
            },
            {
              name: "E",
              type: 7,
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
                      type: 10,
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
              type: 10,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 10,
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
              ],
            },
          },
          path: [
            "random_number_generator_contract",
            "random_number_generator_contract",
            "Error",
          ],
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
                      type: 12,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 7,
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
              type: 12,
            },
            {
              name: "E",
              type: 7,
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
        id: 13,
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
                      type: 7,
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
              type: 7,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 14,
        type: {
          def: {
            variant: {
              variants: [
                {
                  fields: [
                    {
                      type: 1,
                    },
                  ],
                  index: 0,
                  name: "Ok",
                },
                {
                  fields: [
                    {
                      type: 7,
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
              type: 1,
            },
            {
              name: "E",
              type: 7,
            },
          ],
          path: ["Result"],
        },
      },
      {
        id: 15,
        type: {
          def: {
            primitive: "u128",
          },
        },
      },
      {
        id: 16,
        type: {
          def: {
            composite: {
              fields: [
                {
                  type: 3,
                  typeName: "[u8; 32]",
                },
              ],
            },
          },
          path: ["ink_primitives", "types", "Hash"],
        },
      },
      {
        id: 17,
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
