import React from "react";
import { Menu } from "antd";

const DropdownMenu = ({ visible, hideModal, showTask }) => {
  const handleClickTask = () => {
    showTask();
    hideModal();
  };
  // hacer use Effect para que se cierre el modal cuando se haga click en otro lado
  // traer el addtask
  return (
    <Menu
      mode="vertical"
      style={{
        position: "fixed",
        display: visible ? "block" : "none",
        zIndex: 5,
        width: "15%",
        marginBottom: 100,
        bottom: "2px",
        right: "2px",
        backgroundColor: "#1677ff",
        borderRadius: "10px",
        color: "white",
        fontWeight: "bold",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Menu.Item key="option1" onClick={handleClickTask}>
        Crear tarea
      </Menu.Item>
      <Menu.Item key="option2">Crear tablero</Menu.Item>
      <Menu.Item key="option3">Crear proyecto</Menu.Item>
    </Menu>
  );
};

export default DropdownMenu;
