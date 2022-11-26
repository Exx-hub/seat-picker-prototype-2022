import UserProfileClass from "./userProfile";

import { notification } from "antd";

const UserProfile = new UserProfileClass();

const bookingSuccessful = () => {
  const args = {
    message: "BOOKING SUCCESS",
    description: "Booked seat/s successfully",
    duration: 4,
  };

  notification.success(args);
};

const bookingFailed = () => {
  const args = {
    message: "BOOKING FAILED",
    description: "Something went wrong, please try again.",
    duration: 3,
  };

  notification.error(args);
};

const loginSuccessPrompt = () => {
  const args = {
    message: "LOGIN SUCCESS",
    description: "Logged-in Successfully",
    duration: 2,
  };

  notification.success(args);
};

const loginFailedPrompt = () => {
  const args = {
    message: "LOGIN FAILED",
    description: "Incorrect Username/Password",
    duration: 2,
  };

  notification.error(args);
};

const logoutSuccess = () => {
  const args = {
    message: "LOGOUT SUCCESS",
    description: "User Data Successfully Cleared",
    duration: 2,
  };

  notification.success(args);
};

export {
  UserProfile,
  bookingSuccessful,
  bookingFailed,
  loginSuccessPrompt,
  loginFailedPrompt,
  logoutSuccess,
};
