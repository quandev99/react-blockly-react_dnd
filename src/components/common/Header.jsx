import React from "react";

import { Layout,theme } from "antd";
function Header() {
  const { Header } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        position: "sticky",
        width: "100%",
        top: 0,
        zIndex: 99,
        border: "1px solid #eee",
      }}
    >
      App Editor
    </Header>
  );
}

export default Header