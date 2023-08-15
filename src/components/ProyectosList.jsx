import React, { useEffect } from "react";
import { Content } from "antd/es/layout/layout";
import { Menu, Progress } from "antd";

const ProyectosList = () => {
  useEffect(() => {
    document.title = "Tasko - Plan y Control - Calendario";
  }, []);
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
        height: "100vh",
      }}
    >
      <Menu
        defaultSelectedKeys={["A1"]}
        defaultOpenKeys={["t1"]}
        mode="inline"
        items={dashboard}
      />
      <Progress
        style={{
          padding: "10px",
          position: "sticky",
          bottom: "20px",
        }}
        percent={50}
      />
    </Content>
    /* <ProyectoCard key={tablero.indexOf} nombre={tablero} /> */
  );
};

export default ProyectosList;
