import Blockly from "blockly/core";

Blockly.defineBlocksWithJsonArray([
  {
    type: "back",
    message0: "Back count %1 delay %2",
    args0: [
      {
        type: "input_value",
        name: "COUNT",
        check: "Number",
      },
      {
        type: "input_value",
        name: "DELAY",
        check: "Number",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
]);

Blockly.JavaScript["back"] = function (block) {
  var count =
    Blockly.JavaScript.valueToCode(
      block,
      "COUNT",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || 1;
  var delay =
    Blockly.JavaScript.valueToCode(
      block,
      "DELAY",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || 1;
  var code = `Back(${count}, ${delay});\n`;
  return code;
};

// Block shell
// Blockly.defineBlocksWithJsonArray([
//   {
//     type: "shell",
//     message0: "Shell command %1",
//     args0: [
//       {
//         type: "input_value",
//         name: "COMMAND",
//         check: "Number",
//       },
//     ],
//     output: null,
//     inputsInline: true,
//     previousStatement: null,
//     nextStatement: null,
//     colour: 230,
//     tooltip: "",
//     helpUrl: "",
//   },
// ]);
Blockly.Blocks["shell"] = {
  init: function () {
    this.appendValueInput("COMMAND")
      .setCheck("String")
      .appendField("Shell command");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["shell"] = function (block) {
  var command =
    Blockly.JavaScript.valueToCode(
      block,
      "COMMAND",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
  var code = `Shell(${command})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block start_activity
Blockly.Blocks["start_activity"] = {
  init: function () {
    this.appendValueInput("STARTACTIVITY")
      .setCheck("String")
      .appendField("StartActivity");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["start_activity"] = function (block) {
  var activity =
    Blockly.JavaScript.valueToCode(
      block,
      "STARTACTIVITY",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
  var code = `StartActivity(${activity});\n`
  return code;
};

// Block get_clipboard
Blockly.Blocks["get_clipboard"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GetClipboard");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Get the current clipboard content.");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["get_clipboard"] = function (block) {
  var code = `GetClipboard()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block device_size
Blockly.Blocks["device_size"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("DeviceSize");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Get the device size.");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["device_size"] = function (block) {
  var code = `DeviceSize()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block device_width
Blockly.Blocks["device_width"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("DeviceWidth");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Get the device width.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["device_width"] = function (block) {
  var code = `DeviceWidth()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block get_current_activity
Blockly.Blocks["get_current_activity"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GetCurrentActivity");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Get the current activity.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["get_current_activity"] = function (block) {
  var code = `GetCurrentActivity()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block uninstall_app
Blockly.Blocks["uninstall_app"] = {
  init: function () {
    this.appendValueInput("PACKAGE")
      .setCheck("String")
      .appendField("UninstallApp package");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Uninstall an app by package name.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["uninstall_app"] = function (block) {
  var packageName =
    Blockly.JavaScript.valueToCode(
      block,
      "PACKAGE",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "''";
  var code = `UninstallApp(${packageName});\n`;
  return code;
};


// Block input_text
Blockly.Blocks["input_text"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("InputText xpath");
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("text");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.appendValueInput("ISDONTCLEARTEXT")
      .setCheck("Boolean")
      .appendField("isDontClearText (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Input text into a field identified by XPath.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["input_text"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var isDontClearText = Blockly.JavaScript.valueToCode(block, "ISDONTCLEARTEXT", Blockly.JavaScript.ORDER_ATOMIC) || "false";
  var code = `InputText(${xpath}, ${text}, ${xml}, ${isDontClearText})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// Block clear_text
Blockly.Blocks["clear_text"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("ClearText xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip("Clear text from a field identified by XPath.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["clear_text"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `ClearText(${xpath}, ${xml})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block dump_xml
Blockly.Blocks["dump_xml"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("DumpXml");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Dump the current XML.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["dump_xml"] = function (block) {
  var code = `DumpXml()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block tap
Blockly.Blocks["tap"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("Tap xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.appendValueInput("TIMEFIND")
      .setCheck("Number")
      .appendField("timeFind (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Tap on an element identified by XPath.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["tap"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var timeFind = Blockly.JavaScript.valueToCode(block, "TIMEFIND", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `Tap(${xpath}, ${xml}, ${timeFind})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block tap_xy
Blockly.Blocks["tap_xy"] = {
  init: function () {
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField("TapXY x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("y");
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip("Tap at the specified (x, y) coordinates.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["tap_xy"] = function (block) {
  var x = Blockly.JavaScript.valueToCode(block, "X", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var y = Blockly.JavaScript.valueToCode(block, "Y", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `TapXY(${x}, ${y})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block tap_center
Blockly.Blocks["tap_center"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("TapCenter xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.appendValueInput("TIMEFIND")
      .setCheck("Number")
      .appendField("timeFind (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Tap at the center of an element identified by XPath.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["tap_center"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var timeFind = Blockly.JavaScript.valueToCode(block, "TIMEFIND", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `TapCenter(${xpath}, ${xml}, ${timeFind})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block tap_long
Blockly.Blocks["tap_long"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("TapLong xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.appendValueInput("DELAY")
      .setCheck("Number")
      .appendField("delay (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Long tap on an element identified by XPath.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["tap_long"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var delay = Blockly.JavaScript.valueToCode(block, "DELAY", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `TapLong(${xpath}, ${xml}, ${delay})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// Block tap_long_center
Blockly.Blocks["tap_long_center"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("TapLongCenter xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.appendValueInput("DELAY")
      .setCheck("Number")
      .appendField("delay (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Long tap on the center of an element identified by XPath.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["tap_long_center"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var delay = Blockly.JavaScript.valueToCode(block, "DELAY", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `TapLongCenter(${xpath}, ${xml}, ${delay})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block tap_long_xy
Blockly.Blocks["tap_long_xy"] = {
  init: function () {
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField("TapLongXY x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("y");
    this.appendValueInput("DELAY")
      .setCheck("Number")
      .appendField("delay (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Long tap on the specified coordinates (x, y).");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["tap_long_xy"] = function (block) {
  var x = Blockly.JavaScript.valueToCode(block, "X", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var y = Blockly.JavaScript.valueToCode(block, "Y", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var delay = Blockly.JavaScript.valueToCode(block, "DELAY", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `TapLongXY(${x}, ${y}, ${delay})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block sleep_screen
Blockly.Blocks["sleep_screen"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("SleepScreen");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Put the device to sleep.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["sleep_screen"] = function (block) {
  var code = `SleepScreen();\n`;
  return code;
};

// Block input_end
Blockly.Blocks["input_end"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("InputEnd");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("End the input session.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["input_end"] = function (block) {
  var code = `InputEnd()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block unlock_screen
Blockly.Blocks["unlock_screen"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("UnlockScreen");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Unlock the device screen.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["unlock_screen"] = function (block) {
  var code = `UnlockScreen();\n`;
  return code;
};

// Block set_adb_keyboard
Blockly.Blocks["set_adb_keyboard"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("SetAdbKeyboard");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Set the ADB keyboard.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["set_adb_keyboard"] = function (block) {
  var code = `SetAdbKeyboard()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// Block hide_adb_keyboard
Blockly.Blocks["hide_adb_keyboard"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("HideAdbKeyboard");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Hide the ADB keyboard.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["hide_adb_keyboard"] = function (block) {
  var code = `HideAdbKeyboard();\n`;
  return code;
};

// Block open_app
Blockly.Blocks["open_app"] = {
  init: function () {
    this.appendValueInput("PACKAGENAME")
      .setCheck("String")
      .appendField("OpenApp packageName");
    this.appendValueInput("ISKILL")
      .setCheck("Boolean")
      .appendField("isKill (optional)");
    this.appendValueInput("TIMEOUT")
      .setCheck("Number")
      .appendField("timeout (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Open the specified app.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["open_app"] = function (block) {
  var packageName = Blockly.JavaScript.valueToCode(block, "PACKAGENAME", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var isKill = Blockly.JavaScript.valueToCode(block, "ISKILL", Blockly.JavaScript.ORDER_ATOMIC) || "false";
  var timeout = Blockly.JavaScript.valueToCode(block, "TIMEOUT", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `OpenApp(${packageName}, ${isKill}, ${timeout})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block close_app
Blockly.Blocks["close_app"] = {
  init: function () {
    this.appendValueInput("PACKAGENAME")
      .setCheck("String")
      .appendField("CloseApp packageName");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Close the specified app.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["close_app"] = function (block) {
  var packageName = Blockly.JavaScript.valueToCode(block, "PACKAGENAME", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `CloseApp(${packageName});\n`;
  return code;
};

// Block get_current_package
Blockly.Blocks["get_current_package"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GetCurrentPackage");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Get the current package name.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["get_current_package"] = function (block) {
  var code = `GetCurrentPackage()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block input_enter
Blockly.Blocks["input_enter"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("InputEnter");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Send an Enter key event.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["input_enter"] = function (block) {
  var code = `InputEnter()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block input_key_code
Blockly.Blocks["input_key_code"] = {
  init: function () {
    this.appendValueInput("KEYCODE")
      .setCheck("Number")
      .appendField("InputKeyCode keyCode");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Send a key event with the specified key code.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["input_key_code"] = function (block) {
  var keyCode = Blockly.JavaScript.valueToCode(block, "KEYCODE", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `InputKeyCode(${keyCode})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// Custom Block 2
// Block swipe
Blockly.Blocks["swipe"] = {
  init: function () {
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField("Swipe x1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField("y1");
    this.appendValueInput("X2")
      .setCheck("Number")
      .appendField("x2");
    this.appendValueInput("Y2")
      .setCheck("Number")
      .appendField("y2");
    this.appendValueInput("STEPS")
      .setCheck("Number")
      .appendField("steps (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Swipe from (x1, y1) to (x2, y2) with optional steps.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["swipe"] = function (block) {
  var x1 = Blockly.JavaScript.valueToCode(block, "X1", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var y1 = Blockly.JavaScript.valueToCode(block, "Y1", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var x2 = Blockly.JavaScript.valueToCode(block, "X2", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var y2 = Blockly.JavaScript.valueToCode(block, "Y2", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var steps = Blockly.JavaScript.valueToCode(block, "STEPS", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `Swipe(${x1}, ${y1}, ${x2}, ${y2}, ${steps})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block swipe_v
Blockly.Blocks["swipe_v"] = {
  init: function () {
    this.appendValueInput("TYPESWIPE")
      .setCheck("Number")
      .appendField("SwipeV typeSwipe (optional)");
    this.appendValueInput("COUNT")
      .setCheck("Number")
      .appendField("count (optional)");
    this.appendValueInput("STEPS")
      .setCheck("Number")
      .appendField("steps (optional)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Swipe vertically with optional parameters.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["swipe_v"] = function (block) {
  var typeSwipe = Blockly.JavaScript.valueToCode(block, "TYPESWIPE", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var count = Blockly.JavaScript.valueToCode(block, "COUNT", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var steps = Blockly.JavaScript.valueToCode(block, "STEPS", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `SwipeV(${typeSwipe}, ${count}, ${steps});\n`;
  return code;
};

// Block swipe_h
Blockly.Blocks["swipe_h"] = {
  init: function () {
    this.appendValueInput("TYPESWIPE")
      .setCheck("Number")
      .appendField("SwipeH typeSwipe (optional)");
    this.appendValueInput("COUNT")
      .setCheck("Number")
      .appendField("count (optional)");
    this.appendValueInput("STEPS")
      .setCheck("Number")
      .appendField("steps (optional)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Swipe horizontally with optional parameters.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["swipe_h"] = function (block) {
  var typeSwipe = Blockly.JavaScript.valueToCode(block, "TYPESWIPE", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var count = Blockly.JavaScript.valueToCode(block, "COUNT", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var steps = Blockly.JavaScript.valueToCode(block, "STEPS", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `SwipeH(${typeSwipe}, ${count}, ${steps});\n`;
  return code;
};

// Block swipe_and_screen_not_change
Blockly.Blocks["swipe_and_screen_not_change"] = {
  init: function () {
    this.appendValueInput("TYPESWIPE")
      .setCheck("Number")
      .appendField("SwipeAndScreenNotChange typeSwipe (optional)");
    this.appendValueInput("COUNT")
      .setCheck("Number")
      .appendField("count (optional)");
    this.appendValueInput("STEPS")
      .setCheck("Number")
      .appendField("steps (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Swipe and check if screen doesn't change.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["swipe_and_screen_not_change"] = function (block) {
  var typeSwipe = Blockly.JavaScript.valueToCode(block, "TYPESWIPE", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var count = Blockly.JavaScript.valueToCode(block, "COUNT", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var steps = Blockly.JavaScript.valueToCode(block, "STEPS", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `SwipeAndScreenNotChange(${typeSwipe}, ${count}, ${steps})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block clear_data_app
Blockly.Blocks["clear_data_app"] = {
  init: function () {
    this.appendValueInput("PACKAGENAME")
      .setCheck("String")
      .appendField("ClearDataApp packageName");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Clear data of the specified app.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["clear_data_app"] = function (block) {
  var packageName = Blockly.JavaScript.valueToCode(block, "PACKAGENAME", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `ClearDataApp(${packageName});\n`;
  return code;
};

// Block exist_node
Blockly.Blocks["exist_node"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("ExistNode xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.appendValueInput("TIMEOUT")
      .setCheck("Number")
      .appendField("timeout (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Check if a node exists.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["exist_node"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var timeout = Blockly.JavaScript.valueToCode(block, "TIMEOUT", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `ExistNode(${xpath}, ${xml}, ${timeout})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block exist_nodes
Blockly.Blocks["exist_nodes"] = {
  init: function () {
    this.appendValueInput("TIMEOUT")
      .setCheck("Number")
      .appendField("ExistNodes timeout");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml");
    this.appendValueInput("LSTXPATH")
      .setCheck("Array")
      .appendField("lstXpath");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Check if multiple nodes exist.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["exist_nodes"] = function (block) {
  var timeout = Blockly.JavaScript.valueToCode(block, "TIMEOUT", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var lstXpath = Blockly.JavaScript.valueToCode(block, "LSTXPATH", Blockly.JavaScript.ORDER_ATOMIC) || "[]";
  var code = `ExistNodes(${timeout}, ${xml}, ${lstXpath})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block get_attribute_value
Blockly.Blocks["get_attribute_value"] = {
  init: function () {
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("GetAttributeValue xml");
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("xpath");
    this.appendValueInput("ATTRIBUTE")
      .setCheck("String")
      .appendField("attribute");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Get the value of a specified attribute.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["get_attribute_value"] = function (block) {
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var attribute = Blockly.JavaScript.valueToCode(block, "ATTRIBUTE", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `GetAttributeValue(${xml}, ${xpath}, ${attribute})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block get_center_xy_from_bounds
Blockly.Blocks["get_center_xy_from_bounds"] = {
  init: function () {
    this.appendValueInput("BOUNDS")
      .setCheck("String")
      .appendField("GetCenterXYFromBounds bounds");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Get the center XY coordinates from bounds.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["get_center_xy_from_bounds"] = function (block) {
  var bounds = Blockly.JavaScript.valueToCode(block, "BOUNDS", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `GetCenterXYFromBounds(${bounds})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block screenshot
Blockly.Blocks["screenshot"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("ScreenShot");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Take a screenshot.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["screenshot"] = function (block) {
  var code = `ScreenShot()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block swipe_and_tap
Blockly.Blocks["swipe_and_tap"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("SwipeAndTap xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.appendValueInput("TIMEOUT")
      .setCheck("Number")
      .appendField("timeout (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Swipe and tap with optional parameters.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["swipe_and_tap"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var timeout = Blockly.JavaScript.valueToCode(block, "TIMEOUT", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `SwipeAndTap(${xpath}, ${xml}, ${timeout})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block delay_time
Blockly.Blocks["delay_time"] = {
  init: function () {
    this.appendValueInput("SECONDS")
      .setCheck("Number")
      .appendField("DelayTime seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Delay for a specified amount of time.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["delay_time"] = function (block) {
  var seconds = Blockly.JavaScript.valueToCode(block, "SECONDS", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `DelayTime(${seconds});\n`;
  return code;
};

// Block delay_random
Blockly.Blocks["delay_random"] = {
  init: function () {
    this.appendValueInput("MIN")
      .setCheck("Number")
      .appendField("DelayRandom min");
    this.appendValueInput("MAX")
      .setCheck("Number")
      .appendField("max");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Delay for a random amount of time between min and max.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["delay_random"] = function (block) {
  var min = Blockly.JavaScript.valueToCode(block, "MIN", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var max = Blockly.JavaScript.valueToCode(block, "MAX", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `DelayRandom(${min}, ${max});\n`;
  return code;
};

// Block is_emulator
Blockly.Blocks["is_emulator"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("IsEmulator");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Check if the device is an emulator.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["is_emulator"] = function (block) {
  var code = `IsEmulator()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block change_language
Blockly.Blocks["change_language"] = {
  init: function () {
    this.appendValueInput("LANG")
      .setCheck("String")
      .appendField("ChangeLanguage lang");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Change the language of the device.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["change_language"] = function (block) {
  var lang = Blockly.JavaScript.valueToCode(block, "LANG", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `ChangeLanguage(${lang})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block screen_on
Blockly.Blocks["screen_on"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("ScreenOn");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Turn the screen on.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["screen_on"] = function (block) {
  var code = `ScreenOn()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block exist_package
Blockly.Blocks["exist_package"] = {
  init: function () {
    this.appendValueInput("PACKAGENAME")
      .setCheck("String")
      .appendField("ExistPackage packageName");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Check if a package exists on the device.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["exist_package"] = function (block) {
  var packageName = Blockly.JavaScript.valueToCode(block, "PACKAGENAME", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `ExistPackage(${packageName})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// Custom block Custom 3
// Block goto_link
Blockly.Blocks["goto_link"] = {
  init: function () {
    this.appendValueInput("LINK")
      .setCheck("String")
      .appendField("GotoLink link");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Go to the specified link.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_link"] = function (block) {
  var link = Blockly.JavaScript.valueToCode(block, "LINK", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `GotoLink(${link});\n`;
  return code;
};

// Block count_node
Blockly.Blocks["count_node"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("CountNode xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml (optional)");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Count the number of nodes matching the xpath.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["count_node"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `CountNode(${xpath}, ${xml})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block is_uid
Blockly.Blocks["is_uid"] = {
  init: function () {
    this.appendValueInput("UID")
      .setCheck("String")
      .appendField("IsUid uid");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Check if the value is a UID.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["is_uid"] = function (block) {
  var uid = Blockly.JavaScript.valueToCode(block, "UID", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `IsUid(${uid})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block is_closed
Blockly.Blocks["is_closed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("IsClosed");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Check if something is closed.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["is_closed"] = function (block) {
  var code = `IsClosed()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block is_number
Blockly.Blocks["is_number"] = {
  init: function () {
    this.appendValueInput("VALUE")
      .setCheck("String")
      .appendField("isNumber value");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Check if the value is a number.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["is_number"] = function (block) {
  var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `isNumber(${value})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block random_int
Blockly.Blocks["random_int"] = {
  init: function () {
    this.appendValueInput("MIN")
      .setCheck("Number")
      .appendField("randomInt min");
    this.appendValueInput("MAX")
      .setCheck("Number")
      .appendField("max");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Generate a random integer between min and max.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["random_int"] = function (block) {
  var min = Blockly.JavaScript.valueToCode(block, "MIN", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var max = Blockly.JavaScript.valueToCode(block, "MAX", Blockly.JavaScript.ORDER_ATOMIC) || "0";
  var code = `randomInt(${min}, ${max})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block random_item
Blockly.Blocks["random_item"] = {
  init: function () {
    this.appendValueInput("ITEMS")
      .setCheck("Array")
      .appendField("randomItem items");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Select a random item from a list.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["random_item"] = function (block) {
  var items = Blockly.JavaScript.valueToCode(block, "ITEMS", Blockly.JavaScript.ORDER_ATOMIC) || "[]";
  var code = `randomItem(${items})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block create_bounds
Blockly.Blocks["create_bounds"] = {
  init: function () {
    this.appendValueInput("XPATH")
      .setCheck("String")
      .appendField("createBounds xpath");
    this.appendValueInput("XML")
      .setCheck("String")
      .appendField("xml");
    this.setOutput(true, "Object");
    this.setColour(230);
    this.setTooltip("Create bounds based on xpath and xml.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["create_bounds"] = function (block) {
  var xpath = Blockly.JavaScript.valueToCode(block, "XPATH", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var xml = Blockly.JavaScript.valueToCode(block, "XML", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `createBounds(${xpath}, ${xml})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_reel
Blockly.Blocks["goto_reel"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GotoReel");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the reels section.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_reel"] = function (block) {
  var code = `GotoReel()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_friend
Blockly.Blocks["goto_friend"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GotoFriend");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the friends section.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_friend"] = function (block) {
  var code = `GotoFriend()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_page
Blockly.Blocks["goto_page"] = {
  init: function () {
    this.appendValueInput("ID")
      .setCheck("String")
      .appendField("GotoPage id (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the specified page.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_page"] = function (block) {
  var id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `GotoPage(${id})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_profile
Blockly.Blocks["goto_profile"] = {
  init: function () {
    this.appendValueInput("ID")
      .setCheck("String")
      .appendField("GotoProfile id (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the specified profile.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_profile"] = function (block) {
  var id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `GotoProfile(${id})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_group
Blockly.Blocks["goto_group"] = {
  init: function () {
    this.appendValueInput("ID")
      .setCheck("String")
      .appendField("GotoGroup id (optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the specified group.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_group"] = function (block) {
  var id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `GotoGroup(${id})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_home
Blockly.Blocks["goto_home"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GotoHome");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the home section.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_home"] = function (block) {
  var code = `GotoHome()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_menu
Blockly.Blocks["goto_menu"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GotoMenu");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the menu section.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_menu"] = function (block) {
  var code = `GotoMenu()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_watch
Blockly.Blocks["goto_watch"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GotoWatch");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the watch section.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_watch"] = function (block) {
  var code = `GotoWatch()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block goto_notify
Blockly.Blocks["goto_notify"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GotoNotify");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Navigate to the notifications section.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["goto_notify"] = function (block) {
  var code = `GotoNotify()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Block tap_reaction
Blockly.Blocks["tap_reaction"] = {
  init: function () {
    this.appendValueInput("REACT")
      .setCheck("String")
      .appendField("TapReaction react");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Tap on a reaction.");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["tap_reaction"] = function (block) {
  var react = Blockly.JavaScript.valueToCode(block, "REACT", Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = `TapReaction(${react})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


