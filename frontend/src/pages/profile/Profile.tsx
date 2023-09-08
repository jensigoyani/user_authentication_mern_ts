import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userProfileAction } from "../../store/actions/userActions";

const Profile = () => {
  const dispatch: any = useDispatch();
  const userProfile = useSelector((state: any) => state.userReducers);

  const user = userProfile.userProfile;

  useEffect(() => {
    const loggedUserEmail = localStorage.getItem("LOGGEDIN_USER_EMAIL");

    if (loggedUserEmail) {
      dispatch(userProfileAction(loggedUserEmail));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>
        <h2>Profile</h2>
        {userProfile && (
          <div>
            <p>firstname: {user?.firstname}</p>
            <p>lastname: {user?.lastname}</p>
            <p>username: {user?.username}</p>
            <p>Email: {user?.email}</p>
            <p>gender: {user?.gender}</p>
            <p>birthdate: {user?.birthdate}</p>
          </div>
        )}

        <Link to="/list"> User List </Link>
      </div>
    </React.Fragment>
  );
};

export default Profile;
