import { Typography } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/ducks/accountAuth";
import Loading from "./profile/Loading";

const { Title } = Typography;
const Profile = () => {
  const [waiting, setWaiting] = useState({
    loading: false,
    posts: null,
  });

  const dispatch = useDispatch();
  const token = localStorage.token;
  useEffect(() => {
    setWaiting({ loading: true });
    fetch("http://localhost:8000/api/")
      // {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     Authorization: `JWT ${token}`,
      //   },
      // }
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWaiting({ loading: false, posts: data });
        if (data.message) {
          // An error will occur if the token is invalid.
          // If this happens, you may want to remove the invalid token.
          localStorage.removeItem("token");
        } else {
          dispatch({ ...logInAction(), payload: data.user });
        }
      });
  }, [setWaiting]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Title>profile.</Title>
      <div>profile</div>
      <Loading isLoading={waiting.loading} post={waiting.posts} />
    </div>
  );
};

export default Profile;
