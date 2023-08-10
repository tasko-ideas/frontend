import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

import React from "react";

function Navbar({ user, setUser }) {
  const handleclick = () => {
    setUser(!user);
  };
  const items = [
    {
      label: "Proyecto1",
      key: "1",
    },
    {
      label: "Proyecto2",
      key: "2",
    },
  ];
  const items2 = [
    {
      label: "Logout",
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
        <Dropdown
          menu={{
            items,
          }}
          arrow
        >
          <p className="menu" style={{ fontSize: "1.2rem" }}>
            <Space>
              Proyectos
              <DownOutlined />
            </Space>
          </p>
        </Dropdown>
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
