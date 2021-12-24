import classes from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button
      name={props.name}
      value={props.value}
      className={
        props.todoListParam ? `${classes.button}` : `${props.className}`
      }
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
