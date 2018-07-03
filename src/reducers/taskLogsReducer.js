import {
  DELETE_TASK_LOG,
  EXECUTE_TASK,
} from 'children/src/action_types';
import { generateUuid } from 'children/src/util';

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_TASK_LOG:
      return state.filter(taskLog => taskLog.taskLogId !== action.id);
    case EXECUTE_TASK:
      const date       = new Date();
      const dateString = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
      const taskLog = {
        taskLogId:    generateUuid(),
        task:         action.task,
        childId:      action.childId,
        date:         dateString,
      };

      return [
        ...state,
        taskLog,
      ];
    default:
      return state;
  }
};
