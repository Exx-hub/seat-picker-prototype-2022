import { Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { config } from "../../config";
import "./Sidebar.css";
import { SearchOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
const { Sider } = Layout;

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  // useEffect(() => {
  //   let mediaQuery = window.matchMedia("(max-width: 768px)");

  //   if (mediaQuery.matches) {
  //     setIsCollapsed(true);
  //   }
  // }, []);

  return (
    <Sider width={210} className="sider" collapsible>
      <div className="sider-container">
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
          <Menu.Item
            key={"/"}
            onClick={() => navigate("/")}
            style={{ margin: 0, height: 50 }}
            icon={<SearchOutlined />}
          >
            Search Trips
          </Menu.Item>
          <Menu.Item
            key={"/transactions"}
            onClick={() => navigate("/transactions")}
            style={{ margin: 0, height: 50 }}
            icon={<ClockCircleOutlined />}
          >
            Transaction History
          </Menu.Item>
        </Menu>

        <div className="sider-version">build {config.version.build}</div>
      </div>
    </Sider>
  );
}

export default Sidebar;
