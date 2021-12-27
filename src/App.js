import React, { useState } from "react";
import MainHeader from "./Components/UI/MainHeader";
import TodoList from "../src/Components/TodoList/TodoList";
import NewTodoForm from "./Components/NewTodo/NewTodoForm";
import EditContent from "./store/edit-content";
import Login from "./Components/Login/Login";
import Modal from "./Components/UI/Modal";
// Sample Dummpy Data
const Dummy_Data = [
  {
    id: 1,
    name: "Kafil",
    desc: "Need to attend friend's Marriage",
    date: new Date(2021, 11, 2),
  },
  {
    id: 2,
    name: "Kaif",
    desc: "Need to attend in marriage ceremony",
    date: new Date(2021, 2, 22),
  },
  {
    id: 3,
    name: "Abbu",
    desc: "Doctor's appoint",
    date: new Date(2021, 1, 20),
  },
  {
    id: 4,
    name: "Ammi",
    desc: "Need to visit doctor",
    date: new Date(2021, 10, 5),
  },
  {
    id: 5,
    name: "Abbu",
    desc: "Doctor's appointment at chetana hospital",
    date: new Date(2022, 0, 20),
  },
];

function App() {
  const [todoArr, setTodoArr] = useState(Dummy_Data);
  // Button functionality
  const [btn, setBtn] = useState(false);
  // Updating the todo list
  const [updTodo, setUpdTodo] = useState([]);
  // Login status
  const [loginStatus, setLoginStatus] = useState(false);
  // Login Name
  const [loginName, setLoginName] = useState("");
  // Activate todo list
  const [activeTodo, setActiveTodo] = useState(false);
  // Authentication error
  const [authError, setAuthError] = useState(false);

  // Show Form
  const showHideFormHandler = (formValue) => {
    setBtn(formValue);
  };

  const getFormHandler = (submittedFormVal) => {
    setTodoArr((prevTodoList) => {
      return [submittedFormVal, ...prevTodoList];
    });
  };

  const getEdittedFormHandler = (EdittedFormVal) => {
    let newArray = todoArr.filter((newArr) => {
      return newArr.id !== +EdittedFormVal["id"];
    });
    newArray.push(EdittedFormVal);
    setTodoArr(newArray);
  };

  // Remove the specific todo id from the list
  const delTodoListHandler = (todoId) => {
    let newArray = todoArr.filter((newArr) => {
      return newArr.id !== todoId;
    });
    setTodoArr(newArray);
  };

  // Store the josn data
  const jsonDataHandler = (jsonD) => {
    setUpdTodo(jsonD);
  };

  // set error handler
  const errorHandler = () => {
    setAuthError(false);
  };

  // Local Storage
  const localStorageHandler = (lStatus) => {
    setLoginStatus(lStatus);
    if (lStatus === false) {
      setAuthError(!lStatus);
    }
  };

  // Update Login Name
  const loginNameHandler = (loginName) => {
    setLoginName(loginName);
  };
  const localStorageLogoutHandler = () => {
    localStorage.setItem("kaif", 0);
    setActiveTodo(false);
    setLoginStatus(false);
  };

  // update the todo list
  const activateTotoListHandler = (sVal) => {
    setActiveTodo(!sVal);
  };

  return (
    <EditContent.Provider
      value={{
        btnStatus: btn,
        onBtnForm: showHideFormHandler,
        onSetJsonData: jsonDataHandler,
        onGetJsonData: updTodo,
        loginStatus: loginStatus,
        onLogoutStatus: localStorageLogoutHandler,
        onLoginStatus: localStorageHandler,
        loginName: loginName,
        onUpdLoginName: loginNameHandler,
        activateTotoList: activeTodo,
        onActivateTotoList: activateTotoListHandler,
      }}
    >
      <MainHeader />
      {!loginStatus && <Login />}
      {loginStatus && activeTodo && (
        <NewTodoForm
          onSubmitForm={getFormHandler}
          onEditForm={getEdittedFormHandler}
          onShowHideBtn={showHideFormHandler}
        />
      )}
      {loginStatus && activeTodo && (
        <TodoList todo={todoArr} delTodoId={delTodoListHandler} />
      )}
      {authError && (
        <Modal
          header="Alert"
          message="Authentication is failed"
          setError={errorHandler}
        />
      )}
    </EditContent.Provider>
  );
}

export default App;
