import { combineReducers } from 'redux';

import Tasks from './tasksReducer';

export default combineReducers({
      tasks: Tasks,
});
