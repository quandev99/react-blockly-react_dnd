import { useEffect, useState } from 'react'
import * as Blockly from 'blockly/core'
import locale from 'blockly/msg/en'
import 'blockly/blocks'

import '../Blocks/dom'
import '../Blocks/cyf'
import '../Blocks/customBlock'
import useBlockly from '../Blockly/useBlockly'

import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { toolbox } from '../Data/toolbox'
import { Button, Dropdown, Space, Switch, message } from 'antd'
import { useParams } from 'react-router-dom'

import {
  ArrowLeftOutlined,
  EllipsisOutlined,
  WarningOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAllElements,
  getElements,
  getLoginById,
  saveElement,
  updateLoginData
} from '../slices/element'
import { setIsOpen } from '../slices/appSlice'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ListDataElement } from '../Data/element'
import SidebarItem from '../components/SidebarItem'
import DropArea from '../components/DropArea'
import ElementAttribute from '../components/ElementAttribute'
import PreviewModal from '../components/PreviewModal'
Blockly.setLocale(locale)
const AppEditor = () => {
   const [messageApi, contextHolder] = message.useMessage();
  let { id } = useParams()
  const dispatch = useDispatch()
  const [previewOpen, setPreviewOpen] = useState(false)
  const [on, setOn] = useState(false)
  const [generated, setGenerated] = useState('')
  const { isOpen } = useSelector(state => state.app)
  const { selectedElement, login } = useSelector(state => state.logins)
  const {
    BlocklyComponent,
    generate,
    exportToJSON,
    importFromJSON,
    getWorkspaceJSON,
  } = useBlockly({
    initialBlock: null,
    toolbox: toolbox,
  });

  useEffect(() => {
    dispatch(setIsOpen(false))
  }, [dispatch])
  useEffect(() => {
    dispatch(getElements())
  }, [dispatch])
  useEffect(() => {
    dispatch(getLoginById(id))
  }, [dispatch, id])
  const container = login?.script?.container
  useEffect(() => {
    if (container) {
      importFromJSON(container);
    }
  }, [container, importFromJSON, on]);


  function handleGenerate () {
    setGenerated(generate())
  }
  function handleUpdateLogin() {
    exportToJSON();
    messageApi.open({
      type: "success",
      content: "Update login success!",
    });
  }
  
  console.log("login", login);
  return (
    <div className="page">
      {contextHolder}
      <div className="flex justify-between mb-2">
        <Link to="/app">
          <Button icon={<ArrowLeftOutlined />} type="link">
            Back to app
          </Button>
        </Link>
        <Space size="middle">
          <Switch
            checkedChildren="Open"
            unCheckedChildren="Off"
            onChange={() => setOn((on) => !on)}
            onClick={handleUpdateLogin}
          />
          <Button
            type="link"
            className="border border-blue-500 border-1"
            onClick={handleUpdateLogin}
          >
            Save
          </Button>
          <Button type="primary">Run</Button>
          {on && (
            <Button type="primary" onClick={() => setPreviewOpen(true)}>
              Preview
            </Button>
          )}
          <Dropdown
            placement="bottomRight"
            menu={{
              items: [
                {
                  key: "1",
                  label: "Export JSON",
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
      <div className={`blockly-wrapper ${on ? "hidden" : ""}`}>
        <BlocklyComponent />
      </div>
      {on ? (
        <>
          <DndProvider backend={HTML5Backend}>
            <div className="app">
              <div className="sidebar">
                {ListDataElement.elements.map((element) => (
                  <SidebarItem key={element.id} element={element} />
                ))}
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="primary"
                    onClick={() => dispatch(saveElement())}
                  >
                    Save
                  </Button>
                  <Button onClick={() => dispatch(deleteAllElements())}>
                    Clear
                  </Button>
                </div>
              </div>
              <div className="content">
                <DropArea login={login} />
              </div>
              <div>{isOpen && selectedElement && <ElementAttribute />}</div>
            </div>
            <PreviewModal
              isOpen={previewOpen}
              setPreviewOpen={() => setPreviewOpen(!previewOpen)}
              login={login}
            />
          </DndProvider>
        </>
      ) : null}
    </div>
  );
}

export default AppEditor
//  <div className="output">
//             <button onClick={handleUpdateLogin}>Export JSON</button>
//             <button onClick={handleGenerate}>Generate</button>
//             {/* <input type="file" accept=".json" onChange={handleImportJSON} /> */}
//             <textarea
//               id="code"
//               style={{ height: "100%", width: "400px" }}
//               value={generated}
//               readOnly
//             ></textarea>
//           </div>