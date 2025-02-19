import { useState } from "react";
const AddForm = ({ callFunc }) => {
    const [formData, setFormData] = useState({
        title: "",
        status: "incomplete",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const date = new Date();
        setFormData((formData) => {// updating the state
            return { ...formData, [name]: value,
                    date: date.toLocaleString(),
                    id: date.getTime() 
                }
        });
    }
    const handleSubmit = (e) => {     
        e.preventDefault();// this will prevent default behaviour of submit - which prevent reloading of page
        //  console.log(formData);
        if(!formData.title) return;

        let localTodos = localStorage.getItem("todos");
        const jsonTodo = JSON.parse(localTodos);// converting stringified localstorage todos into json format 
        jsonTodo.push(formData);

        setFormData((formData) => ({ ...formData, title: "" }));// reseting the 

        callFunc(jsonTodo);
    }
    return <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text" onChange={handleChange} name="title" value={formData.title}/>
        <label htmlFor="">Status</label>
        <select name="status" onChange={handleChange} value={formData.status}>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </select>
        <div>
            <button>Add Task</button>
            {/* <button>Cancel</button> */}
        </div>
    </form>
}

export default AddForm;