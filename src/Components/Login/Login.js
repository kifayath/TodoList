import React, { useRef, useContext, useState } from "react";
import loginCss from "../Login/Login.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import EditContent from "../../store/edit-content";
import Modal from "../UI/Modal";

const Login = (props) => {
  const name = useRef("");
  const pass = useRef("");

  // Initializing the error
  const [error, setError] = useState();

  const upd = useContext(EditContent);

  const submitHandler = (event) => {
    event.preventDefault();
    const msg = "is not entered, please check once.";
    if (name.current.value === "") {
      setError({
        header: "Alert",
        message: `Name ${msg}`,
      });
      return;
    }

    if (pass.current.value === "") {
      setError({
        header: "Alert",
        message: `Password ${msg}`,
      });
      return;
    }

    upd.onUpdLoginName(name.current.value);
    upd.onLoginStatus(
      localStorage.getItem(pass.current.value) !== null ? true : false
    );
  };

  // set error handler
  const errorHandler = () => {
    setError("");
  };
  return (
    <React.Fragment>
      {error && (
        <Modal
          header={error.header}
          message={error.message}
          setError={errorHandler}
        />
      )}
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
