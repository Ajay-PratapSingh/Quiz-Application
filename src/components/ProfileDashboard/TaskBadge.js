import React from 'react'
import medalimage from "../../images/icons8-medal-64.png";

export default function TaskBadge(props) {
  return (
    <div className='taskbadge'>
        <img src={medalimage}></img>
        <h4>{props.taskname}</h4>
    </div>
  )
}
