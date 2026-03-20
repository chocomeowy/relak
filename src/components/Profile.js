import { Typography, List, Card, Spin, Space, Layout, Button } from "antd";
import {
  SmileOutlined,
  SmileFilled,
  MehOutlined,
  FrownOutlined,
  FrownFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/ducks/accountAuth";
import moment from "moment";
import { jwtDecode } from "jwt-decode";
import MoodChart from "./charts/MoodChart";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const { Title, Text } = Typography;
const { Content } = Layout;

const Profile = () => {
  const [waiting, setWaiting] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState();
  const urlJournals = "https://lepak.herokuapp.com/journals/";
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = localStorage.token;
  const decoded = token ? jwtDecode(token) : navigate(`/login`);

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
        if (res.ok) return res.json();
        throw new Error("Error in network");
      })
      .then((data) => {
        setPost(data);
        setWaiting(false);
        if (data.message) {
          setError(data.message);
          localStorage.removeItem("token");
        } else {
          dispatch({ ...logInAction(), payload: data.user });
        }
      })
      .catch(() => setWaiting(false));
  }, [refresh, dispatch, token, navigate]);

  const updateJournal = (journalid) => navigate(`/journal/${journalid}/edit`);

  const deleteJournal = async (journal) => {
    await fetch(urlJournals + journal.id + "/", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setRefresh(!refresh);
  };

  return (
    <Layout style={{ background: "transparent" }}>
      <Content style={{ padding: "40px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Title className="brand-font" style={{ color: "var(--primary)" }}>profile.</Title>
            {error && <Text type="danger">{error}</Text>}
            <Title level={3} style={{ fontWeight: 300, color: "var(--text-secondary)" }}>
              good to have you here, <span style={{ color: "var(--primary)", fontWeight: 600 }}>{decoded?.username}</span>.
            </Title>
          </div>

          {waiting ? (
            <div style={{ textAlign: "center", padding: "100px" }}>
              <Spin size="large" />
            </div>
          ) : (
            <>
              <div className="glass-card" style={{ padding: "32px", borderRadius: "24px", marginBottom: "48px" }}>
                <MoodChart data={post} />
              </div>

              <List
                grid={{
                  gutter: 24,
                  xs: 1,
                  sm: 2,
                  md: 3,
                }}
                dataSource={post}
                renderItem={(item, index) => (
                  <List.Item key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card
                        className="glass-card"
                        style={{ border: "none", borderRadius: "16px" }}
                        actions={[
                          <EditOutlined key="edit" onClick={() => updateJournal(item.id)} />,
                          <DeleteOutlined key="delete" onClick={() => deleteJournal(item)} />,
                        ]}
                      >
                        <Space direction="vertical" size={12} style={{ width: "100%" }}>
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {moment(item?.date).format("Do MMMM YYYY, h:mm a")}
                          </Text>
                          <Title level={5} style={{ margin: 0 }}>{item.title}</Title>
                          <div style={{ maxHeight: "100px", overflow: "hidden", textOverflow: "ellipsis" }}>
                            <ReactMarkdown>{item.entry}</ReactMarkdown>
                          </div>
                          
                          <div style={{ textAlign: "center", marginTop: "16px" }}>
                            {item.mood === 1 ? (
                              <FrownFilled style={{ fontSize: "36px", color: "var(--accent)" }} />
                            ) : item.mood === 2 ? (
                              <FrownOutlined style={{ fontSize: "36px", color: "#7ac2f5" }} />
                            ) : item.mood === 4 ? (
                              <SmileOutlined style={{ fontSize: "36px", color: "#ffc124" }} />
                            ) : item.mood === 5 ? (
                              <SmileFilled style={{ fontSize: "36px", color: "#fade2a" }} />
                            ) : (
                              <MehOutlined style={{ fontSize: "36px", color: "#cfbece" }} />
                            )}
                          </div>

                          {moment(item.last_updated).format("YYYY-MM-DD HH:mm") !== moment(item.date).format("YYYY-MM-DD HH:mm") && (
                            <Text type="secondary" italic style={{ fontSize: "10px", display: "block", marginTop: "8px" }}>
                              Last Updated: {moment(item.last_updated).format("Do MMMM, h:mm a")}
                            </Text>
                          )}
                        </Space>
                      </Card>
                    </motion.div>
                  </List.Item>
                )}
              />
            </>
          )}
        </motion.div>
      </Content>
    </Layout>
  );
};

export default Profile;
