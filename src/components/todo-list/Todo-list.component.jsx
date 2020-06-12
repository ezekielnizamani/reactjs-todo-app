import React from "react"

import "./Todo-list.style.css"

export const TodoList = (props) => {

    return (

        <ul className="list">

            {props.list.map(item => {

                return (
                    <li className="list-item" key={item.id}>{item.value}
                        <i key={item.id} onClick={() => { props.deleteItem(item.id) }} className="fa fa-trash" aria-hidden="true"></i>
                    </li>)


            })}

        </ul>
    );
}