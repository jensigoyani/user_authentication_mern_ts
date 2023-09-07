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
        <Route path="/" Component={Welcome} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/profile" Component={Profile} />
        <Route path="/list" Component={UserList} />
      </Routes>
    </React.Fragment>
  );
};

export default Router;
