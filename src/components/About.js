import React from "react";
import { useEffect } from "react";
const About = () => {
  const token = localStorage.token;
  useEffect(() => {
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
      });
  }, []);
  return <div></div>;
};

export default About;
