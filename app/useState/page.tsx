'use client'
import { useState } from "react";
import TextInput from "./testInput";
import ArrayList from "./ArrayList";
import { Separator } from "./Separator";


const useStateDemo = ()=>{

    const [count,setCount] = useState(0)

    const addNumber = () =>{
            setCount(count + 1);
    }

    
    return(
        <div>
           <p>count is {count}</p>
           <button className="bg-white text-black" onClick={addNumber}>Increase</button>

           <div className="mt-5 text-bold">
            <TextInput />
           </div>

          

           <div>
            <ArrayList />
           </div>

           <div>
            <Separator />
           </div>

          
        </div>
        

       

    )
}

export default useStateDemo;