import React from "react";

import { Avatar, Button, Dropdown, Flex, Layout,Space,theme, Typography } from "antd";
import { BulbOutlined, CaretDownOutlined, KeyOutlined, LogoutOutlined, MoonOutlined, UserOutlined } from "@ant-design/icons";
function Header({ themeApp, setThemeApp }) {

  const handleChangeTheme = () => {
    setThemeApp(!themeApp);
  };
  const { Header } = Layout;
  const {
    token: { colorBgContainer, colorTextLight, colorTextDark },
  } = theme.useToken();
  const { Title } = Typography;
  return (
    <Header
      style={{
        padding: "20px",
        background: colorBgContainer,
        position: "sticky",
        width: "100%",
        top: 0,
        zIndex: 99,
        border: "1px solid #eee",
        color: themeApp ? colorTextDark : colorTextLight,
      }}
    >
      <Flex
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 6,
        }}
        justify={"space-between"}
        align={"center"}
      >
        <Title
          level={3}
          style={{ width: 200, color:  themeApp ? colorTextDark : colorTextLight }}
        >
          App Editor
        </Title>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "30px",
            color: !themeApp ? "#fff" : "#000",
          }}
        >
          <Button
            onClick={handleChangeTheme}
            icon={themeApp ? <MoonOutlined /> : <BulbOutlined />}
          />
          <Dropdown
            placement="bottomRight"
            menu={{
              items: [
                {
                  key: "1",
                  label: <div onClick={() => {}}> Đổi mật khẩu</div>,
                  icon: <KeyOutlined />,
                },
                {
                  key: "2",
                  label: <div onClick={() => {}}>Đăng xuất</div>,
                  icon: <LogoutOutlined />,
                },
              ],
            }}
            style={{
              curser: "pointer",
            }}
          >
            <Space wrap size={5}>
              <Avatar shape="square" icon={<UserOutlined />} />
              <Title level={5} style={{ color: !themeApp ? "#fff" : "#000" }}>
                nguyenvietquan2605@gmail.com
              </Title>
              <CaretDownOutlined />
            </Space>
          </Dropdown>
        </div>
      </Flex>
    </Header>
  );
}

export default Header