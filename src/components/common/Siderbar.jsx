import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const Siderbar = ({ collapsed }) => {
  const { Sider } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const itemsChildren = [
    {
      key: "1",
      icon: <LaptopOutlined />,
      label: <Link to={"app"}>Ứng dụng</Link>,
    },
    {
      key: "2",
      icon: <NotificationOutlined />,
      label: <Link to={"app/runs"}>lần chạy</Link>,
    },
    {
      key: "3",
      icon: <NotificationOutlined />,
      label: <Link to={"app/mission"}>Nhiệm vụ</Link>,
    },
  ];
  const items2 = itemsChildren.map((item, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: item.icon,
      label: item.label,
    };
  });
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* <div className="bg-gray-400 w-full px-4 h-10 rounded-md " /> */}
      <Menu
        // theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: <Link to={"/"}>Hồ sơ</Link>,
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: <Link to={"app"}>Tự động hóa</Link>,
            children: items2,
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: "Lịch trình",
          },
          {
            key: "5",
            icon: <UploadOutlined />,
            label: "Lịch trình",
          },
          {
            key: "6",
            icon: <UploadOutlined />,
            label: "Lịch trình",
          },
          {
            key: "7",
            icon: <UploadOutlined />,
            label: "Lịch trình",
          },
          {
            key: "8",
            icon: <UploadOutlined />,
            label: "Lịch trình",
          },
          {
            key: "9",
            icon: <UploadOutlined />,
            label: "Lịch trình",
          },
          {
            key: "10",
            icon: <UploadOutlined />,
            label: "Thành viên nhóm",
          },
          {
            type: "divider",
          },
          {
            key: "11",
            icon: <UploadOutlined />,
            label: "Thanh toán",
          },
          {
            key: "12",
            icon: <UploadOutlined />,
            label: "Cà đặt",
          },
          {
            key: "13",
            icon: <UploadOutlined />,
            label: "Trợ Giúp & Tài Liệu",
          },
        ]}
      />
    </Sider>
  );
};

export default Siderbar