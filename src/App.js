import { Layout, Menu } from "antd";
import { Typography } from "antd";
// import AppHeader from "./components/layout/header";
import LoginForm from "./components/login/LoginForm";
import "./App.css";
const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "About Us",
    key: "about-us",
  },
  {
    label: "Dashboard",
    key: "dashboard",
  },
];

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu
          items={items}
          mode="horizontal"
          theme="dark"
          selectedKeys={["home"]}
        ></Menu>
      </Header>
      <Content className="p-5">
        {/* <h1 className="mt-5 text-center">Login</h1> */}
        <Title level={1} style={{ textAlign: "center" }}>
          Login
        </Title>
        <LoginForm />
      </Content>
    </Layout>
  );
}

export default App;
