import React, { useState } from "react";
import {
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const Siderbar = ({ collapsed, setCollapsed }) => {
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
  const children = itemsChildren.map((item, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: item.icon,
      label: item.label,
    };
  });
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        background: colorBgContainer,
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        zIndex: 99,
        width: collapsed ? 80 : 200,
        overflow: "auto",
      }}
      className="sider-container"
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 30,
          height: 30,
        }}
      />
      <Menu
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
            children: children,
          },
          {
            key: "3333",
            icon: <VideoCameraOutlined />,
            label: <Link to={"app"}>Tự động hóa</Link>,
            children: children,
          },
          {
            key: "3333333",
            icon: <VideoCameraOutlined />,
            label: <Link to={"app"}>Tự động hóa</Link>,
            children: children,
          },
          {
            key: "43333",
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