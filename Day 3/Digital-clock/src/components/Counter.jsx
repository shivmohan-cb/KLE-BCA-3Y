import { useState } from "react";
// Counter Component
const Counter = () => {
    // let count = 0;
    // useState is used to mantain the state of a component, and everytime state changes copmonent rerenders
    const [count, setCount] = useState(0);//inital 0;

    function increament() {
        // count += 1;
        setCount(count + 1)
        console.log(count);
    }
    function decreament() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return <div>
        <button onClick={decreament}>-</button>
        <h1>{count}</h1>
        <button onClick={increament}>+</button>
    </div>
}

export default Counter;