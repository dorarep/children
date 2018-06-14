import {
  DELETE_TASK,
  EXECUTE_TASK,
  ADD_TASK,
} from 'children/src/action_types';

const initialTasks = [
  {
    id: 0,
    workId: 0,
    childId: 0,
    finishedDate: null,
  }, {
    id: 1,
    workId: 1,
    childId: 1,
    finishedDate: null,
  }, {
    id: 2,
    workId: 2,
    childId: 2,
    finishedDate: null,
  }, {
    id: 3,
    workId: 3,
    childId: 3,
    finishedDate: null,
  },
];

export default (state = initialTasks, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id);
    case EXECUTE_TASK:
      return state.map(task => (task.id === action.task.id ? {
        id:           task.id,
        workId:       task.workId,
        childId:      task.childId,
        finishedDate: new Date().getTime(),
      } : task));
    case ADD_TASK:
      return [
        ...state,
        {
          id:           new Date().getTime(),
          workId:       action.workId,
          childId:      action.childId,
          finishedDate: null,
        },
      ];
    default:
      return state;
  }
};
