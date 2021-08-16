import Title from "antd/lib/typography/Title";
import React from "react";
import { List, Card } from "antd";

const Gethelp = () => {
  const data = [
    {
      title: "Talk to someone",
      content: `Be with people, avoid drugs & alcohol and avoid harming yourself.
    Everyone is fighting their own battles just as you are fight yours`,
      link: `https://www.sos.org.sg/contact-us`,
      linkName: "SOS SG",
    },
    {
      title: "[TBD 16/8]Anonymously chat with professionals",
      content: `Let someone you can trust know. Take time to do what makes your
      soul happy`,
      link: `https://www.chat.mentalhealth.sg/`,
      linkName: "CHAT SG",
    },
    {
      title: "Seek Help",
      content: `Find a range of free and/or low cost counselling services here. It's better to seek help than to keep it all in.`,
      link: "https://www.healthhub.sg/a-z/support-groups-and-others/20/call-on-these-when-you-need-help",
      linkName: "HealthHub",
    },
  ];

  return (
    <div>
      <Title style={{ padding: "10px", textAlign: "center" }}>
        Need help? You've come to the right place.
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
              {item.content}
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
