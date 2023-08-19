import { BellOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import React from "react";
import User from "./User";

function Navbar({ user, setUser }) {
  const handleclick = () => {
    setUser(!user);
  };

  const items2 = [
    {
      label: <BellOutlined style={{ fontSize: "20px" }} />,
      key: "notification",
    },
    { label: <User />, key: "user" },
    {
      label: <LogoutOutlined />,
      key: "logout",
      onClick: handleclick,
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "23%",
        }}
      >
        <img
          alt="logo"
          src="/assets/img/taskoblanco.png"
          width={150}
          height={35}
        />
      </div>
      <Menu
        style={{
          display: "flex",
          justifyContent: "end",
          width: "50%",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#EC6F4F",
          color: "white",
        }}
        items={items2}
        mode="horizontal"
      />
    </>
  );
}

export default Navbar;
