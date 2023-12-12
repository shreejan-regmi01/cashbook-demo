import { Typography } from "antd";
import LoginForm from "../components/login/LoginForm";
const { Title } = Typography;

function LoginPage() {
  return (
    <>
      <Title level={1} style={{ textAlign: "center" }}>
        Login
      </Title>
      <LoginForm />
    </>
  );
}

export default LoginPage;
