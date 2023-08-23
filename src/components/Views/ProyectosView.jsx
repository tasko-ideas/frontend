import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import CalendarView from "./calendarView/calendarView";
import ViewSelector from "./viewSelector";
import DropdownMenu from "../modals/ModalMenu";
import useModal from "../../hooks/useModals";
import AddTask from "../modals/ModalAddTask";
import { getTareas } from "../../services/serviceTareas";

const ProyectosView = () => {
  const items = [
    { key: "tarea", label: "Crear tarea" },
    { key: "tablero", label: "Crear tablero" },
    { key: "proyecto", label: "Crear proyecto" },
  ];
  const [fechaTask, setFechaTask] = useState(dayjs());
  const [view, setView] = useState("General");
  const { isShowing, toggle } = useModal();
  const { isShowing: addTask, toggle: toggleTask } = useModal();
  const query = useQuery({ queryKey: ["tareas"], queryFn: getTareas }, [
    addTask,
  ]);
  const handleChange = (e) => {
    setView(e.target.value);
  };
  return (
    <Content>
      <ViewSelector view={view} handleChange={handleChange} />
      {view === "Calendar" && (
        <CalendarView
          datos={query.data.data}
          fechaInicio={fechaTask[0]}
          selectFecha={setFechaTask}
          toggle={addTask}
        />
      )}
      {!addTask && (
        <FloatButton
          shape="square"
          type="primary"
          style={{ right: 24 }}
          icon={<PlusOutlined />}
          onClick={toggle}
        />
      )}
      <DropdownMenu
        visible={isShowing}
        hideModal={toggle}
        showTask={toggleTask}
        items={items}
      />
      <AddTask
        visible={addTask}
        hideModal={toggleTask}
        fechaTask={fechaTask}
        setFechaTask={setFechaTask}
      />
    </Content>
  );
};

export default ProyectosView;
