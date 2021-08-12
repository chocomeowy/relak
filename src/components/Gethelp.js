import Title from "antd/lib/typography/Title";
import React from "react";
import { Card, Col, Row } from "antd";

const Gethelp = () => {
  return (
    <div>
      <Title
        style={{
          textAlign: "center",
        }}
      >
        You are not alone
      </Title>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Be with people" bordered={false}>
              <p>
                Be with people, avoid drugs & alcohol and avoid harming
                yourself. Everyone is fighting their own battles just as you are
                fight yours
              </p>
              <a href="https://www.sos.org.sg/contact-us">SOS</a>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Be trusted" bordered={false}>
              <p>
                Let someone you can trust know. Take time to do what makes your
                soul happy
              </p>
              <a href="https://www.chat.mentalhealth.sg/">CHAT</a>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Be Present" bordered={false}>
              <p>
                Focus on the present moment. It matters not what someone is
                born, but what they grow to be. - Albus Dumbledore
              </p>
              <a href="https://www.healthhub.sg/a-z/support-groups-and-others/20/call-on-these-when-you-need-help">
                Healthhub SG
              </a>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Gethelp;
