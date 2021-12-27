import "./Form.css";
import React, { useRef, useState, useContext, useEffect } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import EditContent from "../../store/edit-content";

const Form = (props) => {
  // useContent is used for the edit functionality
  const etc = useContext(EditContent);
  const [upd, setUpd] = useState({});

  useEffect(() => {
    let tempObj = { ...etc.onGetJsonData };
    setUpd(tempObj);
  }, [etc]);

  // Initializing the values with reference proces
  const todoId = useRef();
  const enteredName = useRef("");
  const enteredDesc = useRef("");
  const enteredDate = useRef("");

  // Initializing the error
  const [error, setError] = useState();

  // Submit the form
  const submitHandler = (event) => {
    // to prevent form submission
    event.preventDefault();
    const msg = "is not entered, please check once.";
    if (enteredName.current.value === "") {
      setError({
        header: "Alert",
        message: `Name ${msg}`,
      });
      return;
    }
    if (enteredDesc.current.value === "") {
      setError({
        header: "Alert",
        message: `Description ${msg}`,
      });
      return;
    }
    if (enteredDate.current.value === "") {
      setError({
        header: "Alert",
        message: `Date ${msg}`,
      });
      return;
    }

    let todoIdVal = todoId.current.value;
    const enteredValue = {
      id: todoIdVal !== "" ? +todoIdVal : Math.floor(Math.random() * 1000),
      name: enteredName.current.value,
      desc: enteredDesc.current.value,
      date: new Date(enteredDate.current.value),
    };

    todoIdVal !== ""
      ? props.onEditTodoList(enteredValue)
      : props.onSubmitValue(enteredValue);

    enteredName.current.value = "";
    closeFormHandler();
  };

  // Closing the form
  const closeFormHandler = () => {
    props.onShowForm(false);
  };

  // set error handler
  const errorHandler = () => {
    setError("");
  };

  // Date format to set in Date field
  let date;
  if (etc.onGetJsonData["date"] !== undefined) {
    var curr = new Date(etc.onGetJsonData["date"]);
    curr.setDate(curr.getDate() + 1);
    date = curr.toISOString().substr(0, 10);
  }

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
        <div className="new-todo__controls">
          <Input
            name="todoId"
            id="todoId"
            type="hidden"
            value={upd.id !== "" ? upd.id : ""}
            ref={todoId}
          />
          <Input
            label="Name"
            id="name"
            type="text"
            value={upd.name}
            ref={enteredName}
          />
          <Input
            label="Description"
            id="desc"
            type="text"
            value={upd.desc !== "" ? upd.desc : ""}
            ref={enteredDesc}
          />

          <Input
            label="Date"
            id="date"
            type="date"
            value={date}
            ref={enteredDate}
          />

          <div className="new-todo__actions">
            <Button onClick={closeFormHandler}>Cancel</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
