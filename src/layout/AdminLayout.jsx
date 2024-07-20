import React, {  useState } from "react";

import { ConfigProvider, Layout, theme } from "antd";
import Header from "../components/common/Header";
import {  Outlet } from "react-router-dom";
import Siderbar from "../components/common/Siderbar";

const AdminLayout = () => {
  const {  Content } = Layout;
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);
      const [themeApp, setThemeApp] = React.useState(true);
      const config = {
        token: {
          colorPrimary: "#356bcf",
          colorInfo: "#a5da1b",
          colorBgContainer: themeApp ? "#ffffff" : "#000000",
          colorBgLayout: themeApp ? "#f5f5f5" : "#333333",
          colorPrimaryText: "#a5da1b",
          colorPrimaryBg: "#e0e0e0",
          colorPrimaryBgHover: "#e0e0e0",
          colorLink: "#2646ff",

          colorTextLight: "#00ff00", // Light mode text color
          colorTextDark: "#ff0000", // Dark mode text color
        },
        algorithm: themeApp ? theme.defaultAlgorithm : theme.darkAlgorithm,
      };
  return (
    <ConfigProvider theme={config}>
      <Siderbar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        themeApp={themeApp}
        setThemeApp={setThemeApp}
      ></Siderbar>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200,
          transition: "margin-left 0.2s",
          height: "100%",
        }}
      >
        <>
          <Header themeApp={themeApp} setThemeApp={setThemeApp}></Header>
          <Content
            style={{
              backgroundColor: themeApp ? "#ffffff" : "#000000",
            }}
            className="content-wrapper"
          >
            <Outlet />
          </Content>
        </>
      </Layout>
    </ConfigProvider>
  );
}

export default AdminLayout