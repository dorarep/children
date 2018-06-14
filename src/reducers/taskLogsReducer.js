import {
  DELETE_TASK_LOG,
  EXECUTE_TASK,
} from 'children/src/action_types';

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_TASK_LOG:
      Object.keys(state).forEach((date) => {
        state[date] = state[date].filter(taskLog => taskLog.taskLogId !== action.id);
      });
      return state;
    case EXECUTE_TASK:
      const date       = new Date();
      const dateString = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
      const taskLog = {
        taskLogId:    date.getTime(),
        task:         action.task,
        childId:      action.childId,
      };

      state[dateString] ? state[dateString].push(taskLog) : state[dateString] = [taskLog];

      return state;
    default:
      return state;
  }
};
