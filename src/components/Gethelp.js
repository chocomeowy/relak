import Title from "antd/lib/typography/Title";
import React from "react";
import { List, Card, Col, Row } from "antd";

const Gethelp = () => {
  const data = [
    {
      title: "Be with people",
      content: `Be with people, avoid drugs & alcohol and avoid harming yourself.
    Everyone is fighting their own battles just as you are fight yours`,
      link: `https://www.sos.org.sg/contact-us`,
      linkName: "SOS SG",
    },
    {
      title: "Be trusted",
      content: `Let someone you can trust know. Take time to do what makes your
      soul happy`,
      link: `https://www.chat.mentalhealth.sg/`,
      linkName: "chat SG",
    },
    {
      title: "Be Present",
      content: `Focus on the present moment. It matters not what someone is born,
      but what they grow to be. - Albus Dumbledore`,
      link: "https://www.healthhub.sg/a-z/support-groups-and-others/20/call-on-these-when-you-need-help",
      linkName: "healthhub",
    },
    {
      title: "Be Better",
      content: `self improvement tips`,
      link: "https://www.healthhub.sg/a-z/support-groups-and-others/20/call-on-these-when-you-need-help",
      linkName: "healthhub",
    },
  ];
  return (
    <div>
      <Title
        style={{
          textAlign: "center",
        }}
      >
        You are not alone
      </Title>

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
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
