import { CloseOutlined } from "@ant-design/icons";
// eslint-disable-next-line object-curly-newline
import { DatePicker, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { setTareas } from "../../services/serviceTareas";
import Buttons from "../Buttons";

// eslint-disable-next-line object-curly-newline
const AddTask = ({ title, visible, hideModal, fechaTask, setFechaTask }) => {
  const { RangePicker } = DatePicker;
  const [form] = useForm();
  const mutation = useMutation({ mutationFn: (tarea) => setTareas(tarea) });
  const { TextArea } = Input;
  console.log(title);
  const handleFechaChange = (newFecha) => {
    setFechaTask(newFecha);
  };
  const handleSubmit = () => {
    mutation.mutate(form);
    hideModal();
  };
  useEffect(() => {
    form.setFieldValue("tarea", title);
  }, [visible]);

  return (
    <div
      style={{
        display: visible ? "flex" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor:
          "rgba(0, 0, 0, 0.5)" /* Fondo oscuro semi-transparente */,
        alignItems: "center",
        justifyContent: "center",
        zIndex: "55",
      }}
    >
      <Form
        onFinish={handleSubmit}
        form={form}
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
          display: visible ? "block" : "none",
          minWidth: 600,
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "25px",
          boxShadow: "0px 0px 10px #ccc",
          backgroundColor: "white",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "right" }}>
          <CloseOutlined
            style={{ fontSize: "18px", marginBottom: "12px" }}
            onClick={hideModal}
          />
        </div>

        <Form.Item
          required
          label="Fecha de inicio y de fin"
          name="startDate"
          style={{ display: "inline-block" }}
        >
          <RangePicker onChange={handleFechaChange} value={fechaTask} />
        </Form.Item>

        <Form.Item label="Titulo" name="tarea" required>
          <Input />
        </Form.Item>
        <Form.Item label="Descripción" name="tareaDesc">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Prioridad" name="prioridad">
          <Select
            defaultValue="#3D8BF2"
            style={{ width: "100%" }}
            options={[
              {
                value: "#3D8BF2",
                label: "Normal",
                className: "Normal",
              },
              {
                value: "firebrick",
                label: "Prioritario",
                className: "Prioritario",
              },
            ]}
          />
        </Form.Item>
        <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
          <Buttons label="Agregar tarea" htmlType="submit" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTask;
