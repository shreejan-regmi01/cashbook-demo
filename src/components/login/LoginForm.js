import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onFinish = (_) => {
    api.success({
      message: "Success",
      style: {
        width: 200,
      },
      duration: 1,
    });
    navigate("/home");
  };

  const onFinishFailed = (errInfo) => {
    console.log(errInfo);
  };

  return (
    <>
      {contextHolder}
      <Form
        layout="vertical"
        form={form}
        className="login-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username",
            },
          ]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            size="large"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          className="mt-2"
        >
          <Input.Password
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            size="large"
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }} className="mt-2">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginForm;
