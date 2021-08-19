import { Typography, List, Card, Spin } from "antd";
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
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/ducks/accountAuth";
import moment from "moment";
import jwt_decode from "jwt-decode";
import MoodChart from "./charts/MoodChart";
import ReactMarkdown from "react-markdown";

const { Title, Text } = Typography;

const Profile = () => {
  const [waiting, setWaiting] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState();
  const urlJournals = "http://localhost:8000/journals/";
  let history = useHistory();

  const dispatch = useDispatch();
  const token = localStorage.token;
  //console.log(token);
  const decoded = token ? jwt_decode(token) : history.push(`/login`);

  // ========== GET all journals ==========
  useEffect(() => {
    setWaiting(true);
    fetch(urlJournals, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          //console.log(res);
          return res.json();
        } else if (!res.ok) {
          //console.log(res);
          return res.json();
        }
        throw new Error("Error in network");
      })
      .then((data) => {
        //console.log(data);
        setPost(data);
        setWaiting(false);
        if (data.message) {
          // An error will occur if the token is invalid.
          // If this happens, you may want to remove the invalid token.
          setError(data.message);
          localStorage.removeItem("token");
        } else {
          dispatch({ ...logInAction(), payload: data.user });
        }
      });
  }, [refresh, dispatch, token]);

  // ========== UPDATE one journal ==========
  const updateJournal = (journalid) => {
    history.push(`/journal/${journalid}/edit`);
  };

  // ========== DELETE one journal ==========
  const deleteJournal = async (journal) => {
    const response = await fetch(urlJournals + journal.id + "/", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    setRefresh(!refresh);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Title>profile.</Title>
      {error ? error : <></>}
      <Title level={3}>good to have you here, {decoded?.username}.</Title>
      {waiting ? (
        <Spin size="large" />
      ) : (
        <>
          <div>
            <MoodChart data={post} />
          </div>
          <br />
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
                    <EditOutlined
                      key="edit"
                      onClick={() => updateJournal(item.id)}
                    />,
                    <DeleteOutlined
                      key="delete"
                      onClick={() => deleteJournal(item)}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    description={moment(item?.date).format(
                      "Do MMMM YYYY, h:mm a"
                    )}
                  />
                  <Title level={5}>{item.title}</Title>
                  <Text>
                    <ReactMarkdown>{item.entry}</ReactMarkdown>
                  </Text>
                  <br />
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
                    <MehOutlined
                      style={{ fontSize: "36px", color: "#cfbece" }}
                    />
                  )}
                  <br />
                  <br />
                  {moment(item.last_updated).format(
                    "Do MMMM YYYY, hh:mm:ss a"
                  ) !== moment(item.date).format("Do MMMM YYYY, hh:mm:ss a") ? (
                    <Text style={{ fontSize: "10px" }} type="secondary" italic>
                      Last Updated:{" "}
                      {moment(item.last_updated).format("Do MMMM YYYY, h:mm a")}
                    </Text>
                  ) : null}
                </Card>
              </List.Item>
            )}
          />
        </>
      )}
    </div>
  );
};

export default Profile;
