import "./Filter.css";
import React from "react";

const Filter = (props) => {
  const onChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <div className="todo-filter">
      <div className="todo-filter__control">
        <label> Filter by year</label>

        <select
          value={props.selectedVal}
          onChange={onChangeHandler}
          className="todo-filter__button"
        >
          <option value="">Select Year</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
