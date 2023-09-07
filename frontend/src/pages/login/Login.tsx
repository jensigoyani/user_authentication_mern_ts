import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import "antd/dist/reset.css";
import { Link } from "react-router-dom";
import "./style.css";
import { LoginUser } from "../../interfaces/userInterface";
import { loginUser } from "../../store/actions/userActions";

const Login = () => {
  const defaultData: LoginUser = {
    email: "",
    password: "",
  };

  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const onFinish = async (values: LoginUser) => {
    const { email, password } = values;

    console.log("values....", values);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message.error("Please enter a valid Email.");
      return;
    }

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      message.error(
        "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
      );
      return;
    }

    try {
      await dispatch(loginUser(values));
      setLoginSuccess(true);
      message.success("Login succesfully");

      localStorage.setItem("loggedUser_email", email);

      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      message.error("Login failed. Please try again.");
    }
  };

  return (
    <React.Fragment>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={defaultData}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <Link to="/signup">Don't have an account? Signup here</Link>
        </Form.Item>
        {loginSuccess && <p>Login successfully done!</p>}
      </Form>
    </React.Fragment>
  );
};

export default Login;