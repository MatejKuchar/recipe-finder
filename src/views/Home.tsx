import React from "react";
import logo from "../assets/logo.svg";

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <h1>Home</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Home;
