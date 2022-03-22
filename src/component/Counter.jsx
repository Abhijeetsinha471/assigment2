import React from "react";
const Count = () => {
    const [counter,setcounter] = React.useState(0);
    const changevalue = (val) =>{
         setcounter((prev)=>{
             return prev+val;
         });
    }
    const change = ((val)=>{
        setcounter((prev)=>{
            return prev*val;
        })
    })
    return (
        <>
        <h1>Count:{counter}</h1>
        <button onClick={()=>changevalue(+1)}>+</button>
        <button onClick={()=>changevalue(-1)}>-</button>
        <button onDoubleClick={()=>change(2)}>*2</button>
        </>
    )
}
export {Count};