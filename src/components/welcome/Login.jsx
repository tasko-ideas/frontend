/* eslint-disable no-underscore-dangle */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import {
  Button, Checkbox, ConfigProvider, Form, Input, notification,
} from "antd";
import React, { useEffect, useState } from "react";
import { loguear } from "../../services/servicesUserLogin";
import { USER, USER_LOGIN } from "../../constants/localStorageConstants";

const Login = ({ setLoading, setUser }) => {
  const [form] = Form.useForm();
  const [saveUserLogin, setSaveUserLogin] = useState(false);

  /*   {
    "_id": "64e8d285951015d086eb1e18",
    "fullname": "Arturo",
    "email": "artur@mail.com",
    "password": "",
    "profileImageURL": "",
    "projects": [],
    "tasks": [],
    "active": true,
    "createdAt": "2023-08-25T16:10:45.757Z",
    "updatedAt": "2023-08-25T16:10:45.757Z",
    "__v": 0,
    "calendar": {}
} */
  const openNotificationSuccess = (user) => {
    notification.open({
      message: "Logueado correctamente",
      description: `Bienvenido ${user.fullname} `,
      placement: 'topRight',
      onClick: () => {
        console.log("Login success!");
      },
    });
  };
  const openNotificationError = (err) => {
    notification.open({
      message: "Error en logueo",
      description: `${err?.response?.data?.msg}`,
      placement: "topRight",
      onClick: () => {
        console.log(err);
      },
    });
  };
  /* const login = (e) => {
    e.preventDefault();
    /* setUser(true);
    setLoading(true);
  }; */
  const logueo = useMutation({
    mutationFn: loguear,
    onSuccess: (user) => {
      const dataUser = user.data._doc;
      localStorage.setItem(USER, JSON.stringify(dataUser));
      console.log(dataUser);
      openNotificationSuccess(dataUser);
      setUser(dataUser);
      setLoading(true);
    },
    onError: (err) => {
      openNotificationError(err);
      console.error(err);
    },
  });
  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem(USER_LOGIN));
    if (loginData) {
      logueo.mutate(loginData);
    }
  }, []);

  const handlerCheck = () => {
    setSaveUserLogin(!saveUserLogin);
  };
  // agregar useEffect para recuperar info del login si existe
  /* useEffect(() => {
  }) */
  const onFinish = (loginData) => {
    console.log("Received values of form: ", loginData);
    if (saveUserLogin) {
      localStorage.setItem(USER_LOGIN, JSON.stringify(loginData));
    }
    // completar funcion de logueo
    logueo.mutate(loginData);
  };
  return (
    <Form
      form={form}
      name="login"
      onFinish={onFinish}
      style={{ margin: "20px auto" }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input
          prefix={(
            <UserOutlined
              style={{ color: "rgb(0,100,255)" }}
              className="site-form-item-icon"
            />
          )}
          placeholder="E-mail"
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
        <Input.Password
          prefix={(
            <LockOutlined
              style={{ color: "rgb(0,100,255)" }}
              className="site-form-item-icon"
            />
          )}
          placeholder="Password"
          type="password"
          autoFocus
        />
      </Form.Item>
      <Form.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Checkbox
            onChange={handlerCheck}
            checked={saveUserLogin}
            style={{ width: "50%", fontSize: "16px" }}
          >
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
            htmlType="submit" /*
            onClick={login} */
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
