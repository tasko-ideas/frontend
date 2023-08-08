import React from "react";
import { Content } from "antd/es/layout/layout";
import { Button, ConfigProvider } from "antd";

const ProyectosList = () => {
  const Tableros = ["Tablero 1", "Tablero 2", "Tablero 3", "Tablero 4"];
  return (
    <div>
      <h1 style={{ fontSize: "1.4rem" }}>Tableros</h1>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          margin: "5px",
        }}
      >
        {Tableros.map((tablero) => (
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#ec6f4f",
                colorBgContainer: "#f6ffed",
              },
            }}
            key={tablero.indexOf}
          >
            <Button block>{tablero}</Button>
          </ConfigProvider>
        ))}
      </Content>
    </div>
    /* <ProyectoCard key={tablero.indexOf} nombre={tablero} /> */
  );
};

export default ProyectosList;
