import { combineReducers }  from 'redux';
import childrenReducer      from './childrenReducer';
import worksReducer         from './worksReducer';
import tasksReducer         from './tasksReducer';
import taskLogsReducer      from './taskLogsReducer';
import selectedChildReducer from './selectedChildReducer';

export default combineReducers({
  children:      childrenReducer,
  works:         worksReducer,
  selectedChild: selectedChildReducer,
  tasks:         tasksReducer,
  taskLogs:      taskLogsReducer,
});
