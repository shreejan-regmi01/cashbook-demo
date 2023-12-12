// import { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";
function LoginForm() {
  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errInfo) => {
    console.log(errInfo);
  };

  return (
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
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        value={password}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Item>
      <Form.Item style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
