import React, { useRef, useContext } from "react";
import loginCss from "../Login/Login.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import EditContent from "../../store/edit-content";

const Login = (props) => {
  const name = useRef("");
  const pass = useRef("");

  const upd = useContext(EditContent);

  const submitHandler = (event) => {
    event.preventDefault();
    upd.onUpdLoginName(name.current.value);
    upd.onLoginStatus(
      localStorage.getItem(pass.current.value) !== null ? true : false
    );
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className={loginCss.login}>
          <Input label="Name" name="name" id="name" type="text" ref={name} />
          <br />
          <Input
            label="Password"
            name="pass"
            id="pass"
            type="password"
            ref={pass}
          />
          <br />
          <Button type="submit" value="Submit" name="submit">
            Submit
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
