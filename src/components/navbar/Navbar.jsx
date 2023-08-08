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
      label: "Login",
      key: "login",
      onClick: handleclick,
    },
    { label: "Signup", key: "signup" },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "20%",
        }}
      >
        <img
          alt="logo"
          src="/assets/img/Screenshot_20230728-165122-381.png"
          width={90}
          height={90}
        />
        <Dropdown
          menu={{
            items,
          }}
          arrow
        >
          <p className="menu" style={{ fontSize: "1.2rem" }}>
            <Space>Proyectos</Space>
          </p>
        </Dropdown>
      </div>
      <Menu
        style={{ display: "flex", justifyContent: "end", width: "50%" }}
        items={items2}
        mode="horizontal"
        theme="dark"
      />
    </>
  );
}

export default Navbar;
