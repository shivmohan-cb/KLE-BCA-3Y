import { useState } from "react";
import AddForm from "./components/AddForm";
import TodoItem from "./components/TodoItem"

const TODOS = [
  { id:1324574,title: "First Todo", status: "incomplete", date: new Date().toLocaleDateString() },
];

function App() {
  let localTodos = localStorage.getItem("todos");
  if (!localTodos) {
  // if localstorage todos is empty or null
    const strigifyTodos = JSON.stringify(TODOS);
    localStorage.setItem("todos", strigifyTodos);
    localTodos = localStorage.getItem("todos");
  }
  const [Todos,setTodos] = useState(JSON.parse(localTodos));

  const UpdateTodos = (todos)=>{
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(todos);
  }
  return (
    <div className="app">
      <h1>Todo List App</h1>
      <div>
        {/* <button className="add-button">Add</button> */}
        <AddForm callFunc={UpdateTodos} />
      </div>
      <hr />
      <div className="list">
        {
          Todos.map((elm) =>
            <TodoItem  key={elm.id} id={elm.id} title={elm.title} checked={elm.status=="complete"?true:false} date={elm.date} callFunc={UpdateTodos} />
          )
        }
      </div>
    </div>
  )
}

export default App
