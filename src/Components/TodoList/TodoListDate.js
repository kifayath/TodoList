import "./TodoListDate.css";
import Card from "../UI/Card";

const TodoListDate = (props) => {
  // Date custom
  const day = props.date.toLocaleString("en-US", { month: "short" });
  const month = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="todolist-date">
      <div className="todolist-date__day">{day}</div>
      <div className="todolist-date__month">{month}</div>
      <div className="todolist-date__year">{year}</div>
    </Card>
  );
};

export default TodoListDate;
