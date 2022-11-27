import { useEffect, useState } from "react";

import { Layout, Image } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

import seatLogo from "../../assets/logo/seatsLogo.png";
import "./Header.css";

const { Header } = Layout;

function _Header() {
  const [headerTitle, setHeaderTitle] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/") setHeaderTitle("Search Trips");
    if (pathname === "/profile") setHeaderTitle("Profile");
    if (pathname === "/transactions") setHeaderTitle("Transactions");
    if (pathname === "/about") setHeaderTitle("About");
    if (pathname.includes("booking-details")) setHeaderTitle("Booking Details");
  }, [pathname]);

  return (
    <Header className="home-header">
      <div className="home-header-logo" onClick={() => navigate("/")}>
        <Image preview={false} className="header-logo" src={seatLogo} alt="" />
      </div>

      <div className="home-header-right">
        {headerTitle === "Booking Details" ? (
          <div className="home-header-title">
            <LeftOutlined
              onClick={() => navigate("/")}
              style={{ marginRight: 10 }}
            />
            {headerTitle}
          </div>
        ) : (
          <div className="home-header-title">{headerTitle}</div>
        )}
      </div>
    </Header>
  );
}

export default _Header;
