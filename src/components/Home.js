import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigatge = useNavigate();
  function clickHandler() {
    //move to about page
    navigatge("/about");
  }
  function backHandler(){
    //move to previos page
    navigatge(-1);
  }
  return (
    <div>
      <div>Home</div>
      <button onClick={clickHandler}>Move to about</button>
      <button onClick={backHandler}>Move to about</button>
    </div>
  );
};

export default Home;
