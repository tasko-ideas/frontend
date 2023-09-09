import React, { useState } from "react";
import { Button, Input } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import CardTarea from "../CardTarea";
import Buttons from "../../Buttons";

// eslint-disable-next-line object-curly-newline
const Column = ({ title, datos, showTask, setTitleValue }) => {
  const [titulo, setTitulo] = useState(false);
  const handleAdd = () => {
    setTitulo(!titulo);
  };
  const handleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleShowTask = () => {
    showTask();
    setTitulo(false);
  };

  const { TextArea } = Input;
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        minWidth: "182px",
        minHeight: "76px",
        height: "fit-content",
        borderRadius: "10px",
        padding: "12px 1rem 16px 1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {title}
        <span style={{ cursor: "pointer" }}>
          <img src="/assets/img/Frame.svg" alt="menu" />
        </span>
      </div>
      {datos?.map((dato) => (
        <CardTarea key={dato.id} title={dato.title} />
      ))}
      {titulo && (
        <>
          <TextArea
            type="text"
            placeholder="Ingresá un título para esta tarea..."
            onChange={handleChange}
            style={{ resize: "none", marginTop: "0.5rem" }}
          />
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Buttons label="Agregar Tarea" onClick={handleShowTask} />
            <CloseOutlined
              style={{ fontSize: "1.3rem", cursor: "pointer" }}
              onClick={handleAdd}
            />
          </div>
        </>
      )}
      {!titulo && (
        <Button
          icon={<PlusOutlined />}
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            padding: "0",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
          onClick={handleAdd}
        >
          Añadir tarea
        </Button>
      )}
    </div>
  );
};

export default Column;
