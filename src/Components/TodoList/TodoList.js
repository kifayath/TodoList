import "./TodoList.css";
import Card from "../UI/Card";
import Filter from "../TodoFilter/Filter";
import React, { useState } from "react";
import TodoData from "./TodoData";
import Search from "../TodoFilter/Search";
function TodoList(props) {
  // storing json in a variable
  let filteredTodoList = props.todo;
  // set state value
  const [filteredVal, setFilteredVal] = useState("2021");
  const [search, SetSearch] = useState();
  // Get Filter value
  const getFilterChangeVal = (filteredVal) => {
    setFilteredVal(filteredVal);
  };

  const filterYearFun = () => {
    // Filter logic
    filteredTodoList = props.todo.filter((newArr) => {
      return newArr.date.getFullYear() === +filteredVal;
    });
    // Search logic
    if (search) {
      //console.log(search);
      filteredTodoList = props.todo.filter((sTerm) => {
        return (
          sTerm.name.toUpperCase().startsWith(search.toUpperCase()) &&
          sTerm.date.getFullYear() === +filteredVal
        );
      });
    }
  };

  // Calling filter function
  filterYearFun(filteredVal);

  //console.log(filteredTodoList);
  const searchValue = (sVal) => {
    SetSearch(sVal);
  };

  // delTodoHandler
  const delTodoHandler = (delTodoVal) => {
    props.delTodoId(delTodoVal);
  };
  return (
    <Card className="todo-list">
      <Filter selectedVal={filteredVal} onFilterChange={getFilterChangeVal} />
      <Search searchedVal={searchValue} />
      <TodoData
        filteredTodoList={filteredTodoList}
        delTodoId={delTodoHandler}
      />
    </Card>
  );
}

export default TodoList;
