import Title from "antd/lib/typography/Title";
import React from "react";
import { List, Card } from "antd";

const Gethelp = () => {
  const data = [
    {
      title: "Talk to someone",
      content: ["Samaritans of Singapore(24H): 1767", "Singapore Police Force (24H): 999"],
      link: `https://stayprepared.sg/mymentalhealth/i-need-support-now/`,
      linkName: "More hotlines",
    },
    {
      title: "Chat with professionals",
      content: [`Chat with a dedicated professional from CHAT`],
      link: `https://www.chat.mentalhealth.sg/`,
      linkName: "Chat here",
    },
    {
      title: "Seek Help",
      content: [`Find a range of free and/or low cost counselling services here. It's better to seek help than to keep it all in.`],
      link: "https://blog.moneysmart.sg/healthcare/counselling-singapore-free-affordable/",
      linkName: "MoneySmart Article",
    },
  ];

  return (
    <div>
      <Title style={{ padding: "10px", textAlign: "center" }}>
        help.
      </Title>

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              title={<span style={{ fontSize: "2em" }}>{item.title}</span>}
              style={{ fontSize: "1.5em" }}
            >
               <p>{item.content[0]}</p>
               <p>{item.content[1]}</p>
              <br />
              <a href={item.link}>{item.linkName}</a>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Gethelp;
