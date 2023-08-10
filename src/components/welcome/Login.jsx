import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import React from "react";

const Login = ({ setLoading, setUser }) => {
  const login = (e) => {
    e.preventDefault();
    setUser(true);
    setLoading(true);
  };
  return (
    <Form style={{ margin: "20px auto" }}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu nombre de usuario",
          },
        ]}
      >
        <Input
          prefix={
            <UserOutlined
              style={{ color: "rgb(0,100,255)" }}
              className="site-form-item-icon"
            />
          }
          placeholder="Username"
          autoFocus
        />
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
        <Input
          prefix={
            <LockOutlined
              style={{ color: "rgb(0,100,255)" }}
              className="site-form-item-icon"
            />
          }
          placeholder="Password"
          type="password"
          autoFocus
        />
      </Form.Item>
      <Form.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Checkbox style={{ width: "50%", fontSize: "16px" }}>
            Remember me
          </Checkbox>
          <a
            href="#"
            style={{ width: "50%", textAlign: "end", fontSize: "16px" }}
          >
            Forgot password
          </a>
        </div>
      </Form.Item>
      <Form.Item style={{ display: "flex", justifyContent: "end" }}>
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: "#ed6e4f",
              colorBgTextHover: "#f6ffed",
            },
          }}
        >
          <Button
            className="loginButton"
            style={{
              margin: "0 auto",
              // backgroundColor: "#ed6e4f",
              color: "white",
              padding: "0px 60px",
            }}
            htmlType="submit"
            onClick={login}
            size="large"
          >
            Login
          </Button>
        </ConfigProvider>
      </Form.Item>
    </Form>
  );
};

export default Login;
