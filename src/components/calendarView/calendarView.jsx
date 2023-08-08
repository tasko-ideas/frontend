import { Calendar } from "antd";
import React from "react";
import { Content } from "antd/es/layout/layout";
import AddTask from "../AddTask";

const CalendarView = () => {
  return (
    <Content
      style={{
        display: "flex",
        margin: "0 auto",
        width: "100%",
        padding: "50px 0",
        color: "#fff",
      }}
    >
      <AddTask className="AddTask" />
      <Calendar
        className="Calendario"
        style={{
          width: "50%",
          margin: "0 auto",
          borderRadius: "10px",
          padding: "5px",
        }}
      />
    </Content>
  );
};

export default CalendarView;
