import { BellOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import React from "react";
import User from "./User";
import { USER_LOGIN } from "../../constants/localStorageConstants";

function Navbar({ user, setUser, usuario }) {
  const handleclick = () => {
    setUser(!user);
    localStorage.removeItem(USER_LOGIN);
  };

  const items2 = [
    {
      label: <BellOutlined style={{ fontSize: "20px" }} />,
      key: "notification",
    },
    {
      label: <User usuario={usuario} />,
      key: "user",
      children: [
        {
          label: "Cerrar Sesión",
          icon: <LogoutOutlined />,
          key: "logout",
          onClick: handleclick,
        },
      ],
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
          width="120px"
          height="27px"
        />
      </div>
      <Menu
        style={{
          display: "flex",
          justifyContent: "end",
          width: "50%",
          fontSize: "14px",
          backgroundColor: "#EC6F4F",
          color: "white",
          border: "none",
          lineHeight: "22px",
        }}
        items={items2}
        mode="horizontal"
      />
    </>
  );
}

export default Navbar;
