import { useCallback, useMemo, useState } from "react"
import Child from "./Child"

const UseCallback = () =>{
    const [toggle, setToggle] = useState(false)
    const [text,setText] = useState("Hello, Reactors !!")

    const returnText = useCallback((msg)=>{
        return text + msg;
    },[text])
    
    return(
        <>
        <Child returnText={returnText}/>
        <button onClick={()=> setToggle(!toggle)}> Toggle</button>
        {toggle && <h1> toggle </h1>}
        </>
    )
}
export default UseCallback;