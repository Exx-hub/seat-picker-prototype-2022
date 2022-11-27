import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "./Header";
import Sidebar from "./Sidebar";

const { Content } = Layout;

function MainLayout() {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
