import axios from "axios";
import dayjs from "dayjs";

export default function setTareas(form) {
  const Titulo = form.getFieldValue("tarea");
  const fechaInicio = dayjs(form.getFieldValue("startDate")[0]).format(
    "YYYY-MM-DD"
  );
  const fechaFin = dayjs(form.getFieldValue("startDate")[1]).format(
    "YYYY-MM-DD"
  );
  const Descripcion = form.getFieldValue("tareaDesc");
  return axios.post("http://localhost:3000/tareas", {
    id: Math.random(),
    title: Titulo,
    startDate: fechaInicio,
    endDate: fechaFin,
    description: Descripcion,
  });
}
