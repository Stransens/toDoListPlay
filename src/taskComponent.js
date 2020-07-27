import React, {useState} from 'react';

export default function TaskComponent(props) {
      // let customId = props.task.text + '_' + Math.random();
      return (
          <label className='task-line' htmlFor={props.id}>
                <input id={props.id} type='checkbox' defaultChecked={props.task.isDone} onChange={() => {props.changeStatus(props.task)}}/>
                <span>{props.task.text}</span>
                <span className={props.task.label.toLowerCase() + ' label'}>{props.task.label}</span>
          </label>
      )
}
