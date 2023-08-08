import { Button, Form, Input } from "antd";
import React from "react";

const AddTask = () => {
  return (
    <Form
      name="wrap"
      labelCol={{
        flex: "110px",
      }}
      labelAlign="left"
      labelWrap
      wrapperCol={{
        flex: 1,
      }}
      colon={false}
      style={{
        maxWidth: 600,
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0px 0px 10px #ccc",
        margin: "0 auto",
      }}
    >
      <h1>Convertir en modal</h1>
      <h2 style={{ color: "blue", textAlign: "center" }}>Agregar tareas</h2>
      <Form.Item label="Titulo" name="tarea">
        <Input />
      </Form.Item>
      <Form.Item label="Descripción" name="tareaDesc">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Enviar</Button>
      </Form.Item>
    </Form>
  );
};

export default AddTask;
