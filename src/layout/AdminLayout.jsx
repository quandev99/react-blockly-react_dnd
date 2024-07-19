import React, {  useState } from "react";

import { Layout, theme } from "antd";
import Header from "../components/common/Header";
import {  Outlet } from "react-router-dom";
import Siderbar from "../components/common/Siderbar";

const AdminLayout = () => {
  const {  Content } = Layout;
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);
  return (
      <>
        <Siderbar collapsed={collapsed} setCollapsed={setCollapsed}></Siderbar>
        <Layout
          style={{
            marginLeft: collapsed ? 80 : 200, 
            transition: "margin-left 0.2s",
            height: "100%",
          }}
        >
          <>
            <Header></Header>
            <Content
              style={{
                background:  colorBgContainer,
              }}
              className="content-wrapper"
            >
              <Outlet />
            </Content>
          </>
        </Layout>
      </>
  );
}

export default AdminLayout