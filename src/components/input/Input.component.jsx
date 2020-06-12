import React from "react"
import './Input.style.css'
export const InputBox = (props) => {

    return (
 
            <input type="text" name="add-item" className="add-item" onChange={props.handelChange} placeholder={props.placeholder} />
       
    )

}
