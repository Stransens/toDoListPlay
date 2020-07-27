import {ADD_TASK, EDIT_TASK} from "./types";

const INITIAL_LIST = [
      {text: 'Call Dwight Schrute', label: 'Work', isDone: false},
      {text: 'Learn redux', label: 'Work', isDone: true},
      {text: 'Buy bananas', label: 'Family', isDone: false},
      {text: 'Take out the trash', label: 'Family', isDone: true},
      {text: 'Go for a walk', label: 'Personal', isDone: false},
      {text: 'Do morning exercise', label: 'Personal', isDone: true},
];

export default function tasks(state = INITIAL_LIST, action) {
      switch (action.type) {
            case ADD_TASK:
                  let newArray = [...INITIAL_LIST, ...action.payload];
                  return newArray
                  break;
        case EDIT_TASK:
                  let existingArray = [...INITIAL_LIST]

                  return newArray
                  break;
            default:
                  return state
      }
}
