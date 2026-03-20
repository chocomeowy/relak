import React from "react";
import { List, Card, Typography, Layout, Space, Tag } from "antd";
import { motion } from "framer-motion";
import { PhoneFilled, GlobalOutlined, MessageFilled } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Content } = Layout;

const Gethelp = () => {
  const data = [
    {
      title: "Talk to someone",
      icon: <PhoneFilled />,
      color: "var(--accent)",
      content: [
        { name: "Samaritans of Singapore (24H)", tel: "1767" },
        { name: "Singapore Police Force (24H)", tel: "999" },
      ],
      link: "https://www.healthhub.sg/programmes/mindsg/seeking-support",
      linkName: "More hotlines",
    },
    {
      title: "Chat with professionals",
      icon: <MessageFilled />,
      color: "var(--primary)",
      content: [
        { text: "Do you need someone to talk to?" },
        { text: "Chat with a dedicated professional from CHAT" },
      ],
      link: "https://www.chat.mentalhealth.sg/",
      linkName: "Chat with CHAT",
    },
    {
      title: "Seek Help",
      icon: <GlobalOutlined />,
      color: "#f3a683",
      content: [
        { text: "Find free and affordable counselling services here." },
        { text: "It's always better to seek help than to keep it in." },
      ],
      link: "https://www.moh.gov.sg/seeking-healthcare/find-a-facility-or-service/mental-health-services/",
      linkName: "MOH Mental Health Services",
    },
  ];

  return (
    <Layout style={{ background: "transparent" }}>
      <Content style={{ padding: "40px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <Title className="brand-font" style={{ color: "var(--primary)" }}>
            help.
          </Title>
          <Text type="secondary" style={{ fontSize: "18px" }}>
            You don't have to go through it alone.
          </Text>
        </div>

        <List
          grid={{
            gutter: 32,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 3,
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className="glass-card"
                  hoverable
                  style={{ border: "none", borderRadius: "16px", height: "100%" }}
                  bodyStyle={{ padding: "32px" }}
                >
                  <Space direction="vertical" size={24} style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        backgroundColor: item.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        color: "white",
                        boxShadow: `0 8px 16px ${item.color}33`,
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <Title level={4} style={{ marginBottom: "16px" }}>{item.title}</Title>
                      {item.content.map((line, idx) => (
                        <div key={idx} style={{ marginBottom: "12px" }}>
                          {line.tel ? (
                            <Space>
                              <Text>{line.name}:</Text>
                              <Tag color="blue" style={{ borderRadius: "4px" }}>
                                <a href={`tel:${line.tel}`}>{line.tel}</a>
                              </Tag>
                            </Space>
                          ) : (
                            <Text type="secondary">{line.text}</Text>
                          )}
                        </div>
                      ))}
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "8px",
                        fontWeight: 600,
                        color: "var(--primary)",
                      }}
                    >
                      {item.linkName} →
                    </a>
                  </Space>
                </Card>
              </motion.div>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default Gethelp;
