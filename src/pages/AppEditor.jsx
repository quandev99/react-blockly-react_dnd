import { useState } from "react";
import * as Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";

import "../Blocks/dom";
import "../Blocks/cyf";
import "../Blocks/customBlock";
import useBlockly from "../Blockly/useBlockly";

import "../index.css";
import { Link } from "react-router-dom";
import {toolbox} from "../Data/toolbox";
import { Button, Dropdown, Space, Switch } from "antd";
import { ArrowLeftOutlined, EllipsisOutlined, WarningOutlined } from "@ant-design/icons";
Blockly.setLocale(locale);
const AppEditor = () => {
  const { BlocklyComponent, generate, exportToJSON, importFromJSON } =
    useBlockly({
      toolbox: toolbox,
    });
  const [generated, setGenerated] = useState("");

  function handleGenerate() {
    setGenerated(generate());
  }
  function handleExportJSON() {
    exportToJSON();
  }
  function handleImportJSON(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const json = JSON.parse(event.target.result);
      importFromJSON(json);
    };
    reader.readAsText(file);
  }
  return (
    <div className="page">
      <div className="flex justify-between">
        <Link to="/app">
          <ArrowLeftOutlined />
          <Button type="link">Back to app</Button>
        </Link>
        <Space size="middle">
          <Switch checkedChildren="Open" unCheckedChildren="Off" />
          <Button type="link" className="border border-blue-500 border-1">
            Save
          </Button>
          <Button type="dashed">Dashed</Button>
          <Dropdown
            placement="bottomRight"
            menu={{
              items: [
                {
                  key: "1",
                  label: "Report",
                  icon: <WarningOutlined />,
                },
              ],
            }}
            trigger={["click"]}
          >
            <Button icon={<EllipsisOutlined />} />
          </Dropdown>
        </Space>
      </div>
      <h1 className="title">Blockly tester </h1>

      <div className="blockly-wrapper">
        <BlocklyComponent />
      </div>

      {/* <div className="output">
          <button onClick={handleGenerate}>Generate</button>
          <button onClick={handleExportJSON}>Export JSON</button>
          <input type="file" accept=".json" onChange={handleImportJSON} />
          <textarea
            id="code"
            style={{ height: "100%", width: "400px" }}
            value={generated}
            readOnly
          ></textarea>
        </div> */}
    </div>
  );
};

export default AppEditor;
