import { Layout } from "antd";
import "./App.css";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content className="pt-2">
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
