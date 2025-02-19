import { useState } from "react";
const TodoItem = ({ id, title, date, callFunc, checked }) => {
  const [edit, setEdit] = useState(false);
  const [Title, setTitle] = useState(title);

  const handleCheckBox = (id) => {
    let localTodos = localStorage.getItem("todos");
    const jsonTodo = JSON.parse(localTodos);
    const index = jsonTodo.findIndex((elm) => elm.id == id);
    jsonTodo[index].status = checked ? "incomplete" : "complete";

    callFunc(jsonTodo);
  };

  //For Deleting
  const handleDelete = (id) => {
    let localTodos = localStorage.getItem("todos"); //get todos in stringify format
    const jsonTodo = JSON.parse(localTodos); // parsing into json format
    const remaining = jsonTodo.filter((elm) => elm.id !== id); // return all element which do not have the id

    callFunc(remaining); // calling for updatetodos to rerender the app.jsx
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  //For Editing
  const handleEdit = (id) => {
    let localTodos = localStorage.getItem("todos");
    const jsonTodo = JSON.parse(localTodos);
    const index = jsonTodo.findIndex((elm) => elm.id == id);
    jsonTodo[index].title = Title;
    
    callFunc(jsonTodo);
    setEdit(false);
  };

  return (
    <div className="todo">
      <div className="check">
        <input
          type="checkbox"
          onChange={() => handleCheckBox(id)}
          checked={checked}
        />
      </div>
      <div className="content">
        {edit ? (
          <input onChange={handleChange} value={Title} />
        ) : (
          <h4 className={checked ? "cross" : ""}>{title}</h4>
        )}
        <p>{date}</p>
      </div>
      <div className="buttons">
        {edit ? (
          <>
            <button className="save" onClick={() => handleEdit(id)}>
              Save
            </button>
            <button className="cancel" onClick={() => setEdit(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => setEdit(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
