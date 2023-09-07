import React, { useEffect } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userListAction } from "../../store/actions/userActions";

const UserList = () => {
  const dispatch: any = useDispatch();
  const userList = useSelector((state: any) => state.userReducers);

  useEffect(() => {
    dispatch(userListAction());
  }, [dispatch]);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Birthdate",
      dataIndex: "birthdate",
      key: "birthdate",
    },
  ];

  return (
    <React.Fragment>
      <div>
        <h2>User List</h2>
        {userList.users.map((value: any, index: number) => (
          <Table
            key={value.id}
            columns={columns}
            dataSource={[value]}
            showHeader={index === 0}
            pagination={false}
          />
        ))}

        <Link to="/profile"> Back To Profile </Link>
      </div>
    </React.Fragment>
  );
};

export default UserList;
