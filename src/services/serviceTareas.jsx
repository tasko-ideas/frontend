/* eslint-disable comma-dangle */
import axios from "axios";
import dayjs from "dayjs";

export function getTareas() {
  return axios.get("http://localhost:3000/tareas");
}
export function setTareas(form) {
  console.log(form);
  const Titulo = form.getFieldValue("tarea");
  const fechaInicio = dayjs(form.getFieldValue("startDate")[0]).format(
    "YYYY-MM-DD"
  );
  const fechaFin = dayjs(form.getFieldValue("startDate")[1]).format(
    "YYYY-MM-DD"
  );
  const Descripcion = form.getFieldValue("tareaDesc");
  const prioridad = form.getFieldValue("prioridad");
  return axios.post("http://localhost:3000/tareas", {
    id: Math.random(),
    title: Titulo,
    startDate: fechaInicio,
    endDate: fechaFin,
    priority: prioridad,
    description: Descripcion,
  });
}
