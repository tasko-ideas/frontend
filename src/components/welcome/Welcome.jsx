import { Content } from "antd/es/layout/layout";
// eslint-disable-next-line import/no-extraneous-dependencies
import React from "react";
import { Tabs } from "antd";
import Logo from "../navbar/Logo";
import Login from "./Login";
import Register from "./Register";

const Welcome = ({ setUser, setLoading }) => {
  const items = [
    {
      key: "1",
      label: "Login",
      children: <Login setUser={setUser} setLoading={setLoading} />,
    },
    {
      key: "2",
      label: "Register",
      children: <Register />,
    },
  ];

  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      <Logo />
      <Tabs
        items={items}
        tabBarGutter={250}
        style={{
          marginTop: "20px",
        }}
        centered
      />
    </Content>
  );
};

export default Welcome;
