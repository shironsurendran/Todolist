//coding activity 4.1
import { useState } from "react";
import Clock from 'react-live-clock';
// import TimeField from 'react-simple-timefield';
export default function  App(){
    const [todo,setTodo]=useState([]);
    const [value,setValue]=useState('')
function handle(e){
    e.preventDefault();
    let newitem = value;
    let newlist = [...todo,{text:newitem,}]
    setTodo(newlist)
    setValue('')
}
const removeItem = (index) => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  };
    let list = todo.map((item,index)=>
    <li className="list">
        {item.text}&nbsp;&nbsp;<Clock format={'hh:mm:ss A'} timezone={'IN/Pacific'} />
    <button onClick={()=>removeItem(index)}>-</button>
    </li>)
    return(
        <>
        <h1>Task Tracker</h1>
        <h3>Input Task that have been completed below and keep track of the time when each item was added.</h3>
        <main>
         {list} 
        <form onSubmit={handle}> <br/>
        <input 
            placeholder="Add Event"  
            value={value}
            onChange={e=>setValue(e.target.value)} type='text'
        />Press Enter to Submit
        </form>
        </main>
        </>
    )
}