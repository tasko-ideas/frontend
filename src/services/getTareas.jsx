import axios from "axios";

export default function getTareas() {
  return axios.get("http://localhost:3000/tareas");
}
