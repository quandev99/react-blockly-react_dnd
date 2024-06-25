export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Custom 1",
      "cssConfig": {
    "container": "yourClassName"
  },
      contents: [
        {
          kind: "block",
          type: "back",
        },
        {
          kind: "block",
          type: "shell",
        },
        {
          kind: "block",
          type: "start_activity",
        },
        {
          kind: "block",
          type: "get_clipboard",
        },
        {
          kind: "block",
          type: "device_size",
        },
        {
          kind: "block",
          type: "device_width",
        },
        {
          kind: "block",
          type: "get_current_activity",
        },
        {
          kind: "block",
          type: "uninstall_app",
        },
        {
          kind: "block",
          type: "input_text",
        },
        {
          kind: "block",
          type: "clear_text",
        },
        {
          kind: "block",
          type: "dump_xml",
        },
        {
          kind: "block",
          type: "tap",
        },
        {
          kind: "block",
          type: "tap_xy",
        },
        {
          kind: "block",
          type: "tap_center",
        },
        {
          kind: "block",
          type: "tap_long",
        },
        {
          kind: "block",
          type: "tap_long_center",
        },
        {
          kind: "block",
          type: "tap_long_xy",
        },
        {
          kind: "block",
          type: "sleep_screen",
        },
        {
          kind: "block",
          type: "input_end",
        },
        {
          kind: "block",
          type: "unlock_screen",
        },
        {
          kind: "block",
          type: "set_adb_keyboard",
        },
        {
          kind: "block",
          type: "hide_adb_keyboard",
        },
        {
          kind: "block",
          type: "open_app",
        },
        {
          kind: "block",
          type: "close_app",
        },
        {
          kind: "block",
          type: "get_current_package",
        },
        {
          kind: "block",
          type: "input_enter",
        },
        {
          kind: "block",
          type: "input_key_code",
        },
      ],
    },
    {
      kind: "category",
      name: "Custom 2",
      contents: [
        {
          kind: "block",
          type: "swipe",
        },
        {
          kind: "block",
          type: "swipe_v",
        },
        {
          kind: "block",
          type: "swipe_h",
        },
        {
          kind: "block",
          type: "swipe_and_screen_not_change",
        },
        {
          kind: "block",
          type: "clear_data_app",
        },
        {
          kind: "block",
          type: "exist_node",
        },
        {
          kind: "block",
          type: "exist_nodes",
        },
        {
          kind: "block",
          type: "get_attribute_value",
        },
        {
          kind: "block",
          type: "get_center_xy_from_bounds",
        },
        {
          kind: "block",
          type: "screenshot",
        },
        {
          kind: "block",
          type: "swipe_and_tap",
        },
        {
          kind: "block",
          type: "delay_time",
        },
        {
          kind: "block",
          type: "delay_random",
        },
        {
          kind: "block",
          type: "is_emulator",
        },
        {
          kind: "block",
          type: "change_language",
        },
        {
          kind: "block",
          type: "screen_on",
        },
        {
          kind: "block",
          type: "exist_package",
        },
      ],
    },
    {
      kind: "category",
      name: "Custom 3",
      contents: [
        {
          kind: "block",
          type: "goto_link",
        },
        {
          kind: "block",
          type: "count_node",
        },
        {
          kind: "block",
          type: "is_uid",
        },
        {
          kind: "block",
          type: "is_closed",
        },
        {
          kind: "block",
          type: "is_number",
        },
        {
          kind: "block",
          type: "random_int",
        },
        {
          kind: "block",
          type: "random_item",
        },
        {
          kind: "block",
          type: "create_bounds",
        },
        {
          kind: "block",
          type: "goto_reel",
        },
        {
          kind: "block",
          type: "goto_friend",
        },
        {
          kind: "block",
          type: "goto_page",
        },
        {
          kind: "block",
          type: "goto_profile",
        },
        {
          kind: "block",
          type: "goto_group",
        },
        {
          kind: "block",
          type: "goto_home",
        },
        {
          kind: "block",
          type: "goto_menu",
        },
        {
          kind: "block",
          type: "goto_watch",
        },
        {
          kind: "block",
          type: "goto_notify",
        },
        {
          kind: "block",
          type: "tap_reaction",
        },
      ],
    },
    {
      kind: "category",
      name: "Control",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "controls_if",
          extraState: {
            hasElse: true,
          },
        },
        {
          kind: "block",
          type: "controls_switch_case",
          extraState: {
            casesCount: 1,
            hasDefault: false,
          },
        },
        {
          type: "logic_compare",
          kind: "block",
        },
        {
          kind: "block",
          type: "text",
        },
      ],
    },
    {
      kind: "category",
      name: "Logic",
      contents: [
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
          fields: {
            VAR: "i",
          },
          inputs: {
            FROM: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: {
            NUM: 123,
          },
        },
        {
          kind: "block",
          type: "math_arithmetic",
          fields: {
            OP: "ADD",
          },
        },
        {
          kind: "block",
          type: "math_single",
          fields: {
            OP: "ROOT",
          },
        },
        {
          kind: "block",
          type: "math_trig",
          fields: {
            OP: "SIN",
          },
        },
        {
          kind: "block",
          type: "math_constant",
          fields: {
            CONSTANT: "PI",
          },
        },
        {
          kind: "block",
          type: "math_number_property",
          extraState: '<mutation divisor_input="false"></mutation>',
          fields: {
            PROPERTY: "EVEN",
          },
        },
        {
          kind: "block",
          type: "math_round",
          fields: {
            OP: "ROUND",
          },
        },
        {
          kind: "block",
          type: "math_on_list",
          extraState: '<mutation op="SUM"></mutation>',
          fields: {
            OP: "SUM",
          },
        },
        {
          kind: "block",
          type: "math_modulo",
        },
        {
          kind: "block",
          type: "math_constrain",
          inputs: {
            LOW: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_int",
          inputs: {
            FROM: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "math_random_float",
        },
        {
          kind: "block",
          type: "math_atan2",
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      categorystyle: "list_category",
      contents: [
        {
          kind: "block",
          type: "lists_create_empty",
        },
        {
          kind: "block",
          type: "lists_create_with",
          extraState: {
            itemCount: 3,
          },
        },
        {
          kind: "block",
          type: "lists_repeat",
          inputs: {
            NUM: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_indexOf",
          fields: {
            END: "FIRST",
          },
        },
        {
          kind: "block",
          type: "lists_getIndex",
          fields: {
            MODE: "GET",
            WHERE: "FROM_START",
          },
        },
        {
          kind: "block",
          type: "lists_setIndex",
          fields: {
            MODE: "SET",
            WHERE: "FROM_START",
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Custom",
      contents: [
        {
          kind: "block",
          type: "on_start",
        },
        {
          kind: "block",
          type: "with_element_by_id",
        },
        {
          kind: "block",
          type: "set_content",
          contents: [
            {
              kind: "value",
              name: "VALUE",
              contents: [
                {
                  kind: "shadow",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "category",
      name: "Variables",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Functions",
      categorystyle: "procedure_category",
      custom: "PROCEDURE",
    },
    {
      kind: "category",
      name: "Text",
      categorystyle: "text_category",
      contents: [
        {
          type: "text",
          kind: "block",
          fields: {
            TEXT: "",
          },
        },
        {
          type: "text_join",
          kind: "block",
        },
        {
          type: "text_append",
          kind: "block",
          fields: {
            name: "item",
          },
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          type: "text_length",
          kind: "block",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_isEmpty",
          kind: "block",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          type: "text_indexOf",
          kind: "block",
          fields: {
            END: "FIRST",
          },
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "text",
                  },
                },
              },
            },
            FIND: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_charAt",
          kind: "block",
          fields: {
            WHERE: "FROM_START",
          },
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "text",
                  },
                },
              },
            },
          },
        },
        {
          type: "text_getSubstring",
          kind: "block",
          fields: {
            WHERE1: "FROM_START",
            WHERE2: "FROM_START",
          },
          inputs: {
            STRING: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "text",
                  },
                },
              },
            },
          },
        },
        {
          type: "text_changeCase",
          kind: "block",
          fields: {
            CASE: "UPPERCASE",
          },
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_trim",
          kind: "block",
          fields: {
            MODE: "BOTH",
          },
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_count",
          kind: "block",
          inputs: {
            SUB: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          type: "text_replace",
          kind: "block",
          inputs: {
            FROM: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
            TO: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          type: "text_reverse",
          kind: "block",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },

        {
          type: "text_print",
          kind: "block",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_prompt_ext",
          kind: "block",
          fields: {
            TYPE: "TEXT",
          },
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
      ],
    },
  ],
};
