import React, { Component } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import "./home.css";

const SocialIcons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        right: 24,
        top: "40%",
      }}
    >
      <img
        src="https://img.icons8.com/fluency/50/000000/linkedin.png"
        alt="Linked-In"
      />
      <img
        src="https://img.icons8.com/fluency/48/000000/github.png"
        alt="Github"
      />
    </div>
  );
};
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="HomeContainer">
          <Header />
          <div
            style={{
              display: "flex",
              flex: 1,
              paddingTop: "5%",
              justifyContent: "center",
            }}
          >
            <span>
              <h1 style={{ fontSize: "3.5em" }}>
                Get hired <br /> by the popular
                <br /> teams.
              </h1>
              <h3>
                Find job according to your interest simply click on search
                <br /> and choose category according to your skills
              </h3>
            </span>
          </div>
          <SocialIcons />
        </div>
      </React.Fragment>
    );
  }
}
