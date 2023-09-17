import React from "react";
import { Radio } from "antd";

const ViewSelector = ({ view, handleChange }) => {
  const vistas = [
    "General",
    "Calendar",
    "Roadmap",
    "Gantt",
    "Kanban",
    "Gráfico de rendimiento",
  ];
  return (
    <div style={{ margin: "10px 45px", width: "70vw" }}>
      <Radio.Group buttonStyle="solid" value={view} onChange={handleChange}>
        {vistas.map((vista) => (
          <Radio.Button
            key={vistas.indexOf(vista)}
            style={{ margin: "0 5px" }}
            value={vista}
          >
            {vista}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default ViewSelector;
