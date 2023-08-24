import React from "react";
import Column from "./Column";

const GeneralView = () => {
  return (
    <div
      style={{
        marginLeft: "50px",
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        fontSize: "14px",
        lineHeight: "22px",
      }}
    >
      <Column title="Lista de tareas" />
      <Column title="En proceso" />
      <Column title="Hecho" />
    </div>
  );
};

export default GeneralView;
