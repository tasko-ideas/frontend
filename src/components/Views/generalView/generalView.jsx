/* eslint-disable operator-linebreak */
import React, { useEffect } from "react";
import Column from "./Column";

const GeneralView = ({ datos, showTask, setTitleValue }) => {
  useEffect(() => {
    document.title = "Tasko - Plan y Control - General";
  }, []);
  const columnas = ["Lista de tareas", "En proceso", "Hecho"];
  return (
    <div
      style={{
        marginLeft: "50px",
        display: "flex",
        gap: "2rem",
        justifyContent: "flex-start",
        fontSize: "14px",
        lineHeight: "22px",
      }}
    >
      {columnas &&
        columnas.map((columna) => (
          <Column
            title={columna}
            datos={columnas.indexOf(columna) === 0 ? datos : null}
            showTask={showTask}
            setTitleValue={setTitleValue}
          />
        ))}
    </div>
  );
};

export default GeneralView;
