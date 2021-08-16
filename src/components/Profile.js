import { Typography } from "antd";
import { List, Space, Card, Spin} from "antd";
import {
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/ducks/accountAuth";
import moment from "moment";

const { Title } = Typography;

const Profile = () => {
  const [waiting, setWaiting] = useState(false);
  const [post, setPost] = useState();

  const dispatch = useDispatch();
  const token = localStorage.token;
  useEffect(() => {
    setWaiting(true);
    fetch("https://lepak.herokuapp.com/journals/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
        setWaiting(false);
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
      <Title level={3}>welcome back.</Title>
      {waiting ? (
        <Spin size="large" />
      ) : (
        <List
          grid={{
            gutter: 16,
            column: 4,
            xs: 1,
            sm: 2,
            md: 3,
          }}
          dataSource={post}
          renderItem={(item) => (
            <List.Item key={item.title}>
              <Card title={item.title}>
                <List.Item.Meta
                  description={moment(item?.date).format(
                    "Do MMMM YYYY, h:mm a"
                  )}
                />
                <Space size="middle">
                  {item.mood < 3 ? (
                    <FrownOutlined />
                  ) : item.mood > 3 ? (
                    <SmileOutlined />
                  ) : (
                    <MehOutlined />
                  )}
                  <EditOutlined />
                  <DeleteOutlined />
                </Space>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Profile;
