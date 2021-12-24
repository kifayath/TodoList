import NavCss from "../UI/Navigation.module.css";
import Button from "./Button";
import EditContent from "../../store/edit-content";
import React, { useContext } from "react";

const Navigation = () => {
  const upd = useContext(EditContent);
  const activateTotoHandler = (val) => {
    upd.onActivateTotoList(val);
  };
  return (
    <div className={NavCss.nav}>
      <ul>
        {upd.loginStatus && (
          <li>
            {upd.loginName.charAt(0).toLocaleUpperCase() +
              upd.loginName.slice(1)}
          </li>
        )}
        {upd.loginStatus && (
          <li onClick={activateTotoHandler.bind(this, upd.activateTotoList)}>
            Toto List
          </li>
        )}
        <li>
          {upd.loginStatus && (
            <Button onClick={upd.onLogoutStatus}>Logout</Button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
