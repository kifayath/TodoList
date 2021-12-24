import "./NewTodoForm.css";
import React, { useContext } from "react";
import Form from "./Form";
import Button from "../UI/Button";
import EditContent from "../../store/edit-content";
import Card from "../UI/Card";
const NewTodoForm = (props) => {
  const ctx = useContext(EditContent);
  const getSubmittedValueHandler = (submittedVal) => {
    props.onSubmitForm(submittedVal);
  };

  const editedSubmittedHandler = (updatedVal) => {
    props.onEditForm(updatedVal);
  };
  const showHideFormHandler = (formValue) => {
    props.onShowHideBtn(formValue);
  };

  let displayForm = (
    <Form
      onShowForm={showHideFormHandler}
      onSubmitValue={getSubmittedValueHandler}
      onEditTodoList={editedSubmittedHandler}
    />
  );

  if (!ctx.btnStatus) {
    displayForm = (
      <div className="new-todo__create">
        <Button name="btn" value="false" onClick={showHideFormHandler}>
          Create New Todo
        </Button>
      </div>
    );
  }
  return <Card className="new-todo-form">{displayForm}</Card>;
};
export default NewTodoForm;
