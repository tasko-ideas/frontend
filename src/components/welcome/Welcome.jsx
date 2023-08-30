import { Content } from "antd/es/layout/layout";
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from "react";
import { Tabs } from "antd";
import Logo from "../navbar/Logo";
import Login from "./Login";
import Register from "./Register";

const Welcome = ({ setUser, setLoading }) => {
  const [activeTab, setActiveTab] = useState();
  const onChange = (key) => {
    setActiveTab(key);
  };

  const setTab = () => {
    setActiveTab("1");
  };

  const items = [
    {
      key: "1",
      label: "Login",
      children: <Login setUser={setUser} setLoading={setLoading} />,
    },
    {
      key: "2",
      label: "Register",
      children: <Register setTab={setTab} />,
    },
  ];

  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5rem",
        height: "100vh",
      }}
    >
      <Logo />
      <Tabs
        activeKey={activeTab}
        items={items}
        tabBarGutter={250}
        style={{
          marginTop: "20px",
        }}
        onChange={onChange}
        centered
      />
    </Content>
  );
};

export default Welcome;
