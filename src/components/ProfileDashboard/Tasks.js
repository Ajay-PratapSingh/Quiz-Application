import React from 'react';
import "./ProfileDashboard.css";
import TaskBadge from './TaskBadge';

export default function Tasks() {
  return (
    <div className='tasks-wrapper'>
        <strong>Daily Tasks</strong>
        <div className='task'>
            <TaskBadge taskname={"1 Quiz"}></TaskBadge>
            <TaskBadge taskname={"Score 50%"}></TaskBadge>
            <TaskBadge taskname={"Score 100%"}></TaskBadge>
        </div>
    </div>
  )
}
