import {ADD_TASK, EDIT_TASK} from './types';

export const addTask = (obj) => {
      return {
            type: ADD_TASK,
            payload: obj
      }
}

export const editTask = (obj) => {
      return {
            type: EDIT_TASK,
            payload: obj
      }
}
