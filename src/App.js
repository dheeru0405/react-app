import React from "react";
import "./style.css";
import img from "./asserts/user1.jpg";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        <img src={img} alt="user Image" />
      </div>
    </div>
  );
};

export default App;
