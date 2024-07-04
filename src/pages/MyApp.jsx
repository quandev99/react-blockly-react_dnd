import React, { useState } from "react";
import { Button, Dropdown, Flex, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid"; 
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  PlusOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import {
  importLoginFileJson,
  removeLogin,
  exportLoginFileJson,
  addLogin,
} from "../slices/element";
import moment from "moment";
import "moment/locale/vi";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  };
  const MyApp = () => {
       
         const dispatch = useDispatch();
         const navigate = useNavigate();
         const { logins: data, login } = useSelector(
           ((state) => state.logins) || []
         );

         function handleImportLoginFromJson(event) {
           const file = event.target.files[0];
           const reader = new FileReader();
           reader.onload = function (event) {
             const json = JSON.parse(event.target.result);
             dispatch(importLoginFileJson({ login: json })); // Dispatch the new action
           };
           reader.readAsText(file);
         }

         const columns = [
           {
             key: "name",
             title: "Tên",
             dataIndex: "name",
             render: (text) => <a>{text}</a>
           },
           {
             key: "updatedAt",
             title: "Chỉnh sửa lúc",
             dataIndex: "updatedAt",
             render: (text) => moment(text).fromNow()
           },
           {
             key: "createdAt",
             title: "Tạo lúc",
             dataIndex: "createdAt",
             render: (text) => moment(text).format("HH:mm:ss DD/MM/YYYY")
           },
           {
             key: "41",
             title: "Hết hạn lúc",
             render: (record) => (
               <span>
                 {record.expiredAt
                   ? moment(record.expiredAt).format("HH:mm:ss DD/MM/YYYY")
                   : "-"}
               </span>
             ),
           },
           {
             key: "413",
             title: "Phiên bản",
             dataIndex: "version",
           },
           {
             key: "51",
             title: "Mở",
             render: (record) => (
               <div className="flex gap-x-2">
                 <Link to={`/app/${record?.id}`}>
                   <Button type="primary" icon={<EditOutlined />}></Button>
                 </Link>
                 <Dropdown
                   placement="bottomRight"
                   menu={{
                     items: [
                       {
                         key: "1",
                         label: (
                           <div
                             onClick={() => handleExportLoginToJson(record?.id)}
                           >
                             Export JSON
                           </div>
                         ),
                         icon: <VerticalAlignBottomOutlined />,
                       },
                       {
                         key: "2",
                         label: (
                           <div
                             onClick={() => dispatch(removeLogin(record?.id))}
                           >
                             Remove Login
                           </div>
                         ),
                         icon: <DeleteOutlined />,
                       },
                     ],
                   }}
                 >
                   <Button icon={<EllipsisOutlined />} />
                 </Dropdown>
               </div>
             ),
           },
         ];
         function handleExportLoginToJson(id) {
           const login = data.find((item) => item.id === id);
           const jsonString = JSON.stringify(login, null, 2);
           downloadJSONFile(jsonString, "QuanLogin.json");
         }
         const downloadJSONFile = (content, fileName) => {
           const a = document.createElement("a");
           const file = new Blob([content], { type: "application/json" });
           a.href = URL.createObjectURL(file);
           a.download = fileName;
           a.click();
           URL.revokeObjectURL(a.href);
         };
    return (
      <div>
        <div className="flex justify-end">
          <Flex gap="small" wrap>
            <div className="flex text-blue-500">
              <input
                type="file"
                accept=".json"
                onChange={handleImportLoginFromJson}
                style={{ display: "none" }}
                id="import-json-login"
              />
              <Button
                className="flex text-blue-500"
                type="default"
                icon={<DownloadOutlined />}
                size={"large"}
                onClick={() =>
                  document.getElementById("import-json-login")?.click()
                }
              >
                Nhập úng dụng
              </Button>
            </div>
            <div className="flex">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                size={"large"}
                onClick={() => {
                  const id = uuidv4();
                  dispatch(addLogin(id));
                  navigate(`/app/${id}`);
                }}
              >
                Tạo ứng dụng
              </Button>
            </div>
          </Flex>
        </div>
        <Link to="editor">Mở</Link>
        <Table
          rowSelection={{
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
};

export default MyApp;
