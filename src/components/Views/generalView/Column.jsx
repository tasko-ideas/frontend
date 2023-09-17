import React from "react";
import CardTarea from "../CardTarea";
import Buttons from "../../Buttons";

const Column = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        width: "282px",
        minHeight: "76px",
        borderRadius: "10px",
        padding: "12px 26px 16px 26px",
      }}
    >
      {title}
      <CardTarea />
      <Buttons label="Añadir Tarea" />
    </div>
  );
};

export default Column;
