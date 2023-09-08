import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Select, DatePicker } from "antd";
import "antd/dist/reset.css";
import { SignUp } from "../../interfaces/userInterface";
import { registerUser } from "../../store/actions/userActions";
import { Link } from "react-router-dom";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Signup = () => {
  const defaultData: SignUp = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    birthdate: null,
  };

  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // VALIDATION AND DISPATCH CALL
  const onFinish = async (values: SignUp) => {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      gender,
      birthdate,
    } = values;

    if (!firstname.trim() || !lastname.trim()) {
      message.error("Please enter valid Firstname and Lastname.");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      message.error("Username can only contain letters and numbers.");
      return;
    }

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

    if (!gender) {
      message.error("Please select a gender.");
      return;
    }

    if (!birthdate) {
      message.error("Please enter your birthdate.");
      return;
    }

    try {
      const birthdateDate = new Date(birthdate);

      const updatedValues = {
        ...values,
        birthdate: birthdateDate,
      };

      await dispatch(registerUser(updatedValues));
      setRegistrationSuccess(true);
      navigate("/profile");
      message.success("Registration successfully done!");
    } catch (error) {
      console.error("Registration error:", error);
      message.error("Registration failed. Please try again.");
    }
  };

  return (
    <React.Fragment>
      <Form
        {...layout}
        name="nest-messages"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        initialValues={defaultData}
      >
        <Form.Item name="firstname" label="First Name">
          <Input />
        </Form.Item>
        <Form.Item name="lastname" label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="birthdate" label="Birthdate">
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to="/login">Already have an account? Login here</Link>
      {registrationSuccess && <p>Registration successfully done!</p>}
    </React.Fragment>
  );
};

export default Signup;
