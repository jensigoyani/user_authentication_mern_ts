import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Welcome from "../component/Welcome";
import Profile from "../pages/profile/Profile";
import UserList from "../pages/userList/UserList";

const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </React.Fragment>
  );
};

export default Router;
