import {ADD_TASK, EDIT_TASK, SORT_TASKS} from "../actions/types";

const INITIAL_LIST = [
      {text: 'Call Dwight Schrute', label: 'Work', isDone: false},
      {text: 'Learn redux', label: 'Work', isDone: true},
      {text: 'Buy bananas', label: 'Family', isDone: false},
      {text: 'Take out the trash', label: 'Family', isDone: true},
      {text: 'Go for a walk', label: 'Personal', isDone: false},
      {text: 'Do morning exercise', label: 'Personal', isDone: true},
];

let unchecked, checked

export default function tasksReducer(state = INITIAL_LIST, action) {
      switch (action.type) {
            case ADD_TASK:
                  let newArray = state.slice();
                  newArray.push(action.payload);
                  unchecked = newArray.filter((item) => item.isDone === false);
                  checked = newArray.filter((item) => item.isDone === true);
                  let sortedNewArray = [...unchecked, ...checked ];
                  return sortedNewArray
            case EDIT_TASK:
                  let index = state.findIndex(item => item.text === action.payload.text);
                  let editedArray = state.slice()
                  editedArray.splice(index, 1, action.payload)
                  unchecked = state.filter((item) => item.isDone === false);
                  checked = state.filter((item) => item.isDone === true);
                  let sortedEditedArray = [...unchecked, ...checked ];
                  return sortedEditedArray
            case SORT_TASKS:
                  unchecked = state.filter((item) => item.isDone === false);
                  checked = state.filter((item) => item.isDone === true);
                  let sortedArray = [...unchecked, ...checked ];
                  return sortedArray
            default:
                  return state
      }
}
