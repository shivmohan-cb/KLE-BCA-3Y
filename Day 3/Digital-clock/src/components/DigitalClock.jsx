import { useState } from "react";
//Digital Clock
const DigitalClock = ()=>{
    let time = new Date().toLocaleTimeString();
    const [currTime,setTime] = useState(time);// time is the initial value
    const updateTime = ()=>{
     const time = new Date().toLocaleTimeString();
     setTime(time);
    }
    setInterval(()=>{
        updateTime();
    },1000);// 1000 ms == 1 sec
    return <h1>{currTime}</h1>
}
export default DigitalClock;