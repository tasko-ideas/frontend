import React from "react";

const CardTarea = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "241px",
        minHeight: "63px",
        borderRadius: "10px",
        padding: "12px 18px",
        marginTop: "14px",
      }}
    >
      {title}
    </div>
  );
};

export default CardTarea;
