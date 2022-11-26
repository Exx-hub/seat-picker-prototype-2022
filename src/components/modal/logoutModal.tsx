import React from "react";
import { Modal, Button } from "antd";

import "./modal.css";
import { useNavigate } from "react-router-dom";
import { FixMeLater } from "../../types/interfaces";
import { logoutSuccess, UserProfile } from "../../utility";

function LogOutModal(props: FixMeLater) {
  const navigate = useNavigate();

  const handleLogout = () => {
    UserProfile.clearData();
    logoutSuccess();
    navigate("/login");
  };
  return (
    // @ts-ignore
    <Modal
      visible={props.visible}
      className="modal"
      onCancel={props.handleCancel}
      footer={[
        <Button
          key={"cancel-button"}
          className="cancel-btn"
          onClick={props.handleCancel}
        >
          Cancel
        </Button>,
        <Button key={"ok-button"} className="ok-btn" onClick={handleLogout}>
          Ok
        </Button>,
      ]}
    >
      Are you sure you want to logout?
    </Modal>
  );
}

export default LogOutModal;
