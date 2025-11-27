import { useState } from "react"


export default function TextInput (){

    const [txt,setTxt] = useState("")


    return(
        <>
           <div>
            <input className="bg-white text-black" type="text" value={txt} placeholder="Enter text" onChange={(e) => setTxt(e.target.value)}/>

            <p className="m-5 font-bold">the text is {txt}</p>
           </div>
        </>
    )
}
