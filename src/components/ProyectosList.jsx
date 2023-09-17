import React from "react";
import { Content } from "antd/es/layout/layout";
import { Menu, Progress } from "antd";
import { DashboardOutlined } from "@ant-design/icons";

const ProyectosList = () => {
  const Tableros = [
    { label: "Tablero1", key: "t1" },
    { label: "Tablero2", key: "t2" },
    { label: "Tablero3", key: "t3" },
  ];
  const items = [
    {
      label: "Proyecto1",
      key: "1",
      children: Tableros,
    },
    {
      label: "Proyecto2",
      key: "2",
      children: [],
    },
  ];
  const dashboard = [
    {
      icon: <DashboardOutlined />,
      label: "Dashboard",
      key: "A1",
      children: items,
    },
  ];
  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      <Menu
        defaultSelectedKeys={["A1"]}
        defaultOpenKeys={["t1"]}
        mode="inline"
        items={dashboard}
      />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          maxWidth: "200px",
          display: "flex",
          flexDirection: "column",
          color: "black",
          left: "1px",
        }}
      >
        <p style={{ padding: "0 10px" }}>Progreso</p>
        <Progress
          style={{
            padding: "10px",
            position: "fixed",
            bottom: "7px",
            maxWidth: "200px",
          }}
          percent={50}
        />
      </div>
    </Content>
    /* <ProyectoCard key={tablero.indexOf} nombre={tablero} /> */
  );
};

export default ProyectosList;
