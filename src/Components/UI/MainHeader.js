import mainCss from "../UI/MainHeader.module.css";
import Navigation from "./Navigation";
import React, { useEffect } from "react";

const Main = (props) => {
  // Store defaut data in browser local storage
  useEffect(() => {
    localStorage.setItem("kaif", "1");
    localStorage.setItem("admin", "1");
  }, []);

  return (
    <div className={mainCss["main-header"]}>
      <h2>My Page</h2>
      <Navigation />
    </div>
  );
};

export default Main;
