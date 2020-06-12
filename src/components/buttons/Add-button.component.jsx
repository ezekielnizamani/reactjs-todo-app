import React from "react";

import './Add-button.style.css'
export const AddButton  = (props) =>{
   return (
   <button className="add-btn" onClick ={props.handelClick}>Add</button> 
  
   );
}