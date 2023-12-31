/* eslint-disable no-underscore-dangle */
import { Badge, Calendar } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const CalendarView = ({ datos, selectFecha }) => {
  // const [datos, setDatos] = useState([]);
  const [fecha, setFecha] = useState(() => dayjs("2023-08-14"));
  useEffect(() => {
    document.title = "Tasko - Plan y Control - Calendario";
  }, []);
  const onSelect = (newValue) => {
    setFecha(newValue);
    selectFecha(newValue);
  };
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
      <ul className="events" key={listTareas.$oid || listTareas.id}>
        {listTareas.map((item) => (
          <li key={item._id?.$oid}>
            <span>
              <Badge dot color={item.priority ? item.priority : "blue"} />
              {item.title}
            </span>
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
