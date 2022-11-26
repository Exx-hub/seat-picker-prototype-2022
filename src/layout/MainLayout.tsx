import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { ChangePassModal, LogOutModal } from "../components/modal";

const { Content } = Layout;

function MainLayout() {
  const [changePassVisible, setChangePassVisible] = useState(false);
  const [logOutVisible, setLogOutVisible] = useState(false);
  return (
    <Layout>
      <Header
        setChangePassVisible={() => setChangePassVisible(true)}
        setLogOutVisible={() => setLogOutVisible(true)}
      />
      <Layout>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Layout>

      <ChangePassModal
        visible={changePassVisible}
        handleCancel={() => setChangePassVisible(false)}
        handleOk={() => setChangePassVisible(false)}
      />
      <LogOutModal
        visible={logOutVisible}
        handleCancel={() => setLogOutVisible(false)}
        handleOk={() => setLogOutVisible(false)}
      />
    </Layout>
  );
}

export default MainLayout;
