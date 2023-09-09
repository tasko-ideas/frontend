import React from "react";
import { Button } from "antd";

const Buttons = ({ label, htmlType, onClick }) => {
  return (
    <Button
      type="primary"
      style={{
        margin: "10px 0",
        width: "130px",
        minHeight: "37px",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#EC6F4F",
      }}
      onClick={onClick}
      htmlType={htmlType}
      className="tarea-boton"
    >
      {label}
    </Button>
  );
};

export default Buttons;
