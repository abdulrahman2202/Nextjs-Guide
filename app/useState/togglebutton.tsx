'use client'

import { useState } from "react"
const Togglebutton = () => {
    const [isOpen,setIsOpen] = useState(false)

     function buttonPress (){
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <button className="bg-[#333333] text-black " onClick={buttonPress}>Toggle</button>

        {isOpen && <p>box is open</p>}
    </div>
  )
}

export default Togglebutton