import React, {  useState } from "react";

import { Layout, theme } from "antd";
import Header from "../components/common/Header";
import {  Outlet } from "react-router-dom";
import Siderbar from "../components/common/Siderbar";

const AdminLayout = () => {
  const {  Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  return (
    <div>
      <Layout>
        <Siderbar collapsed={collapsed}></Siderbar>
        <Layout>
          <Header setCollapsed={setCollapsed} collapsed={collapsed}></Header>
          <Content
            style={{
              margin: "8px",
              padding: 24,
              height: "700px",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminLayout