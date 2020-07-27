import {ADD_TASK, EDIT_TASK, SORT_TASKS} from './types';

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

export const sortTasks = () => {
      return {
            type: SORT_TASKS,
      }
}
