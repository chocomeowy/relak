import React from "react";
import { useEffect } from "react";
const About = () => {
  const token = localStorage.token;
  useEffect(() => {
    fetch("http://localhost:8000/journals/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div></div>;
};

export default About;
