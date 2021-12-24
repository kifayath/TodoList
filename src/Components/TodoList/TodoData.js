import "./TodoData.css";
import React, { useState } from "react";
import TodoListUsers from "../TodoList/TodoListUsers";
import Button from "../UI/Button";

const TodoData = (props) => {
  // sort toggle functionality
  const [sort, setSort] = useState("des");
  const [arrow, setArrow] = useState("arrow up");

  if (props.filteredTodoList.length === 0) {
    return (
      <h2 className="todo-data__fallback">
        No data found for this filtered year.
      </h2>
    );
  }

  // Sorting functionality
  //var isDescending = false; //set to false for ascending
  let sortedArray = props.filteredTodoList.sort((a, b) =>
    sort === "des"
      ? new Date(
          b.date.getMonth() +
            "/" +
            b.date.getDate() +
            "/" +
            b.date.getFullYear()
        ).getTime() -
        new Date(
          a.date.getMonth() +
            "/" +
            a.date.getDate() +
            "/" +
            a.date.getFullYear()
        ).getTime()
      : new Date(
          a.date.getMonth() +
            "/" +
            a.date.getDate() +
            "/" +
            a.date.getFullYear()
        ).getTime() -
        new Date(
          b.date.getMonth() +
            "/" +
            b.date.getDate() +
            "/" +
            b.date.getFullYear()
        ).getTime()
  );

  // console.log("Initial Val: " + sortedArray);
  const sortHandler = (event) => {
    let boolSortVal = event.target.value === "des" ? "asc" : "des";
    let arrow = event.target.value === "des" ? "arrow down" : "arrow up";
    setArrow(arrow);
    setSort(boolSortVal);
  };

  // Delete handler
  const delHandler = (delV) => {
    props.delTodoId(delV);
  };
  return (
    <React.Fragment>
      <div className="Sort">
        <Button className="btn btn-2" value={sort} onClick={sortHandler}>
          Sort
        </Button>

        <i className={arrow}></i>
      </div>
      <ul className="todo-data">
        {sortedArray.map((todo) => {
          return (
            <TodoListUsers
              key={todo.id}
              id={todo.id}
              name={todo.name}
              desc={todo.desc}
              date={todo.date}
              delVal={delHandler}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoData;
