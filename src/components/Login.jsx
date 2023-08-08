import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { Button } from "antd/es/radio";
import Logo from "./navbar/Logo";

const Login = ({ setUser, setLoading }) => {
  const login = (e) => {
    e.preventDefault();
    setUser(true);
    setLoading(true);
  };

  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      <Logo />
      <Form style={{ margin: "50px auto" }}>
        <Form.Item
          style={{ width: "30vw" }}
          name="username"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu nombre de usuario",
            },
          ]}
        >
          <Input placeholder="Username" autoFocus />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu contraseña",
            },
          ]}
        >
          <Input placeholder="Password" type="password" autoFocus />
        </Form.Item>
        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ margin: "0 auto" }}
            type="primary"
            htmlType="submit"
            onClick={login}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default Login;
