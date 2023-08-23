import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button, ConfigProvider, Form, Input } from "antd";
import { createUser } from "../../services/servicesUserLogin";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
/* import Users from "../../services/servicesUserLogin"; */

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 36,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 36,
      offset: 8,
    },
  },
};
const Register = () => {
  const [form] = Form.useForm();
  const registrar = useMutation({
    mutationFn: createUser,
    onSuccess: (user) => {
      console.log(user);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  const onFinish = (newUser) => {
    console.log(newUser);
    registrar.mutate(newUser);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{
        margin: "20px auto",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="fullname"
        tooltip="Complete your name and your lastname"
        rules={[
          {
            required: true,
            message: "Please input your fullname!",
            whitespace: true,
          },
        ]}
      >
        <Input
          placeholder="Fullname"
          prefix={
            <UserOutlined
              style={{ color: "rgb(0,100,255)" }}
              className="site-form-item-icon"
            />
          }
        />
      </Form.Item>

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
          prefix={
            <MailOutlined
              style={{ color: "rgb(0,100,255)" }}
              className="site-form-item-icon"
            />
          }
          placeholder="E-mail"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={
            <LockOutlined
              style={{ color: "rgb(0,100,255)" }}
              className="site-form-item-icon"
            />
          }
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="passwordCheck"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={
            <LockOutlined
              style={{ color: "rgb(0,100,255)" }}
              className="site-form-item-icon"
            />
          }
          placeholder="Password"
        />
      </Form.Item>

      {/* <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item> */}

      <Form.Item
        {...tailFormItemLayout}
        style={{ display: "flex", justifyContent: "end" }}
      >
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
            htmlType="submit"
            style={{
              margin: "0 auto",
              // backgroundColor: "#ed6e4f",
              color: "white",
              padding: "0px 60px",
            }}
            size="large"
          >
            Register
          </Button>
        </ConfigProvider>
      </Form.Item>
    </Form>
  );
};
export default Register;
