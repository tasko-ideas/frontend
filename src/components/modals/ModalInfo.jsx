import React from "react";
import Buttons from "../Buttons";

const ModalInfo = ({ setVisibilidad }) => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor:
          "rgba(0, 0, 0, 0.5)" /* Fondo oscuro semi-transparente */,
        alignItems: "center",
        justifyContent: "center",
        zIndex: "55",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "400px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        <img src="/assets/img/isotiponaranjo.png" alt="logo" width={100} />
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          Bienvenido a Tasko!
        </h2>
        <Buttons
          type="primary"
          label="Crea tu primer proyecto"
          onClick={() => {
            setVisibilidad();
          }}
        />
      </div>
    </div>
  );
};

export default ModalInfo;
