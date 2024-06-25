import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Tên",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Chỉnh sửa lúc",
    dataIndex: "updated",
  },
  {
    title: "Tạo lúc",
    dataIndex: "created",
  },
  {
    title: "Hết hạn lúc",
    dataIndex: "expiresAt",
  },
  {
    title: "Phiên bản",
    dataIndex: "version",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    updated: 32,
    created: "New York No. 1 Lake Park",
    expiresAt: "21:56:15 02/05/2024",
    version: "1.0.0",
  },
  {
    key: "2",
    name: "Jim Green",
    updated: 42,
    created: "London No. 1 Lake Park",
    expiresAt: "21:56:15 02/05/2024",
    version: "1.0.0",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  // getCheckboxProps: (record) => ({
  //   disabled: record.name === "Disabled User",
  //   // Column configuration not to be checked
  //   name: record.name,
  // }),
};

const MyApp = () => {
  return (
    <div>
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
