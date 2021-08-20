import React from "react";
import { Collapse, Spin, Layout, Row, Col, Typography } from "antd";
import { useQuery } from "react-query";
const { Title, Text } = Typography;
const { Content, Footer } = Layout;

const About = () => {
  const { Panel } = Collapse;
  const { isLoading, error, data } = useQuery("fetchQuote", () =>
    fetch(
      "https://api.quotable.io/random?tags=inspirational|faith|life|future"
    ).then((res) => res.json())
  );

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Layout style={{ backgroundColor: "#f5f5f5" }}>
        <Content>
          <Title style={{ textAlign: "center" }}>welcome to relak.</Title>
          <Title level={3} style={{ textAlign: "center" }}>
            the wellness app for Singaporeans, by Singaporeans.
          </Title>
          <Col span={8} offset={8}>
            {error && <div>Failed to get inspirational quotes...</div>}
            {isLoading ? (
              <div style={{ textAlign: "center" }}>
                <Spin />
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Row align="center">
                  <Col>
                    <Text type="secondary" italic>
                      {data.content}
                    </Text>
                  </Col>
                  <Col>
                    <Title level={5} style={{ color: "#c5c5c5" }} italic>
                      {data.author}
                    </Title>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
          <Collapse
            accordion
            align="center"
            style={{
              margin: "50px",
            }}
          >
            <Panel header="Who are we?" key="1">
              <p>
                We are a group of software engineers who share a passion for
                mental health and wellness. Mental health is something extremely
                important for general wellbeing, and it is imperative in the
                fast-paced world of today that we take steps to manage it
                properly, in a convenient and efficient way.
              </p>
            </Panel>
            <Panel header="Why this app?" key="2">
              <p>
                Despite the plethora of existing relaxation and mental wellness
                apps on the Internet, we discovered that there was no localized
                app for Singaporeans. Furthermore, we noticed that most apps
                were standalone features (like mood journaling, sound effects,
                breathing). We wanted to unify all of those concepts under a
                single app, dedicated just for Singaporeans.
              </p>
            </Panel>
            <Panel header="How much is it?" key="3">
              <p>
                It’s free, and always will be. Mental wellness should never come
                at a price.
              </p>
            </Panel>
            <Panel header="What can this app do for me?" key="4">
              <p>
                For starters, check out the breathing application. By following
                the animated diagram on the screen, tailor your breaths to what
                is displayed on the screen. Breathing is extremely important and
                has an immediate effect on wellbeing and relaxation.
              </p>
              <br />
              <p>
                The sound component offers a myriad range of relaxing sound and
                noises, perfect for focus - or to allow you to experience the
                sounds of nature right from your device.
              </p>
              <br />
              <p>
                Check out the mood journal too. Enter in your moods and how you
                feel, and look at the chart for an overview of how you’ve been
                over the week.
              </p>
              <br />
              <p>
                If you need help - be it chat or counselling, click on{" "}
                <b>“Get Help”</b> - there are many resources there which can
                steer you in the right direction.
              </p>
            </Panel>
          </Collapse>
        </Content>
        <Footer
          style={{
            marginTop: "50px",
            textAlign: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Text type="secondary" style={{ fontSize: "10px" }} italic>
            &copy; 2021. Made with love by Gordon, Fah Jin, and Charlene.
            <br />
            Check out our GitHub{" "}
            <a href="https://github.com/chocomeowy/relak">here</a> and{" "}
            <a href="https://github.com/chocomeowy/lepak">here</a>.
          </Text>
        </Footer>
      </Layout>
    </div>
  );
};

export default About;
