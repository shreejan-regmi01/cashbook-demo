import { Layout, Menu } from "antd";
// import AppHeader from "./components/layout/header";
import "./App.css";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import AddBusiness from "./views/AddBusiness";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Header>
        <Menu
          // items={items}
          mode="horizontal"
          theme="dark"
          selectedKeys={["home"]}
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about-us">About Us</Menu.Item>
          <Menu.Item key="dashboard">Dashboard</Menu.Item>
        </Menu>
      </Header> */}
      <Content className="pt-2">
        <LoginPage />
        {/* <HomePage /> */}
        {/* <AddBusiness /> */}
      </Content>
    </Layout>
  );
}

export default App;
