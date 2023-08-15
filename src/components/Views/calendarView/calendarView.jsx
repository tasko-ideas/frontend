import { Calendar } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import getTareas from "../../../services/getTareas";

const CalendarView = ({ toggle, selectFecha }) => {
  const [datos, setDatos] = useState([]);
  const [fecha, setFecha] = useState(() => dayjs("2023-08-14"));
  const onSelect = (newValue) => {
    setFecha(newValue);
    selectFecha(newValue);
  };
  const fetchData = async () => {
    const respuesta = await getTareas();
    setDatos(respuesta.data);
  };
  useEffect(() => {
    fetchData();
  }, [toggle]);
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return datos.length;
    }
    return null;
  };
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    // eslint-disable-next-line operator-linebreak
    const mes =
      value.month() <= 9 ? `0${value.month() + 1}` : value.month() + 1;
    const dia = value.date() <= 9 ? `0${value.date()}` : value.date();
    const listTareas = datos.filter((tarea) => {
      return tarea.startDate === `${value.year()}-${mes}-${dia}`;
    });
    return (
      <ul className="events">
        {listTareas.map((item) => (
          <li key={item._id?.$oid}>
            {/* <Badge text={item.title} /> */}
            {item.title}
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return (
    <Calendar
      value={fecha}
      onSelect={onSelect}
      style={{ width: "70vw", margin: "20px auto" }}
      fullscreen={false}
      cellRender={cellRender}
    />
  );
};

export default CalendarView;
