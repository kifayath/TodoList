import "./Search.css";

const Search = (props) => {
  const changeNameHandler = (event) => {
    props.searchedVal(event.target.value);
  };
  return (
    <div className="todo-filter">
      <div className="todo-filter__control">
        <label> Search by name</label>
        <input type="text" name="name" id="name" onChange={changeNameHandler} />
      </div>
    </div>
  );
};

export default Search;
