import { Typography } from "antd";
import { List, Space, Card, Spin } from "antd";
import {
  SmileOutlined,
  SmileTwoTone,
  MehOutlined,
  FrownOutlined,
  FrownTwoTone,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/ducks/accountAuth";
import moment from "moment";
import jwt_decode from "jwt-decode";

const { Title, Text } = Typography;

const Profile = () => {
  const [waiting, setWaiting] = useState(false);
  const [post, setPost] = useState();

  const dispatch = useDispatch();
  const token = localStorage.token;
  const decoded = jwt_decode(token);

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
      <Title level={3}>good to have you here, {decoded?.username}.</Title>
      {waiting ? (
        <Spin size="large" />
      ) : (
        <List
          grid={{
            gutter: 16,
            column: 3,
            xs: 1,
            sm: 2,
            md: 3,
          }}
          dataSource={post}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Card
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <List.Item.Meta
                  description={moment(item?.date).format(
                    "Do MMMM YYYY, h:mm a"
                  )}
                />
                <Title level={5}>{item.title}</Title>
                <Text>{item.entry}</Text>
                <br />
                <Space size="middle">
                  {item.mood === 1 ? (
                    <FrownTwoTone
                      style={{ fontSize: "36px" }}
                      twoToneColor="#5f40db"
                    />
                  ) : item.mood === 2 ? (
                    <FrownOutlined
                      style={{ fontSize: "36px", color: "#7ac2f5" }}
                    />
                  ) : item.mood === 4 ? (
                    <SmileOutlined
                      style={{ fontSize: "36px", color: "#ffc124" }}
                    />
                  ) : item.mood === 5 ? (
                    <SmileTwoTone
                      style={{ fontSize: "36px" }}
                      twoToneColor="#fade2a"
                    />
                  ) : (
                    <MehOutlined style={{ fontSize: "36px", color:"#cfbece" }} />
                  )}
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
