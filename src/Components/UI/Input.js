import React from "react";
import "../UI/Input.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="new-todo__control">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        defaultValue={props.value}
        ref={ref}
      />
    </div>
  );
});

export default Input;
