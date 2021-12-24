import "./TodoListUsers.css";
import TodoListDate from "./TodoListDate";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import React, { useState, useContext } from "react";
import EditContent from "../../store/edit-content";
import delImp from "../asset/delete.jpg";
import editImp from "../asset/edit.png";

const TodoListUsers = (props) => {
  const [error, setError] = useState();
  const [todoId, setTodoId] = useState();
  const etx = useContext(EditContent);

  const delConfirmHandler = (todoId) => {
    setTodoId(todoId);
    setError({
      header: "Alert",
      message: "Are you sure, you want to remove this todo item?",
    });
  };
  // Remove todo item from the list
  const delHandler = () => {
    props.delVal(todoId);
  };

  // Edit functionality
  const editHandler = (todoID) => {
    etx.onBtnForm(true);
    etx.onSetJsonData(todoID);
  };

  // style for button
  const cssButtonStyle = {
    mixBlendMode: "multiply",
    cursor: "pointer",
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
          param={true}
          onDel={delHandler}
        />
      )}
      <li>
        <Card className="todoListUsers">
          <div>
            <img
              src={delImp}
              onClick={delConfirmHandler.bind(this, props.id)}
              alt="Del"
              height={18}
              width={18}
              style={cssButtonStyle}
            ></img>
            &nbsp;
            <img
              src={editImp}
              onClick={editHandler.bind(this,  {
                id: props.id,
                name: props.name,
                desc: props.desc,
                date: props.date,
              })}
              alt="Edit"
              height={18}
              TodoListDate
              width={18}
              style={cssButtonStyle}
            ></img>
            <h2>{props.name}</h2>
            <span className="todoListUsers__text">{props.desc}</span>
          </div>
          <TodoListDate date={props.date} />
        </Card>
      </li>
    </React.Fragment>
  );
};

export default TodoListUsers;
