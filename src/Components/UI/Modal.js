import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.setError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.header}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button
            onClick={props.param ? props.onDel : props.setError}
            todoListParam={true}
          >
            {props.param ? "Yes" : "Ok"}
          </Button>
          &nbsp;&nbsp;
          {props.param ? (
            <Button onClick={props.setError} todoListParam={true}>
              No
            </Button>
          ) : (
            ""
          )}
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default Modal;
