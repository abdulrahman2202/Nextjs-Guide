import { useState } from "react"

const ArrayList = () =>{

    const [items,setItems] = useState<string[]>([])

    const addItems = ()=>{
        setItems([...items,"New Items"])
    }
    return(
        <div>
            <button onClick={addItems}>Add Item</button>

           {items.map((item,index) =>(
            <p key={index}>{item}</p>
           ))}
            
        </div>
    )
}

export default ArrayList