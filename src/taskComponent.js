import React, {useState} from 'react';

export default function TaskComponent(props) {
      const [checked, setCheck] = useState(props.task.isDone)
      return (
          <div>
                <input type='checkbox' defaultChecked={checked} onChange={() => { setCheck(!checked); props.changeStatus(!checked)}}/>
                <span>{props.task.text}</span>
                <span>{props.task.label}</span>
          </div>
      )
}
