import {
  ADD_CHILD,
  DELETE_CHILD,
  UPDATE_CHILD,
  SELECT_CHILD,
  EXECUTE_TASK,
  ADD_WORK,
  DELETE_WORK,
  UPDATE_WORK,
  ADD_TASK,
  DELETE_TASK,
  DELETE_TASK_LOG,
} from 'children/src/action_types';

export const addChild = () => ({
  type: ADD_CHILD,
});

export const deleteChild = id => ({
  type: DELETE_CHILD,
  id,
});

export const updateChild = params => ({
  type: UPDATE_CHILD,
  child: params,
});

export const selectChild = id => ({
  type: SELECT_CHILD,
  id,
});

export const executeTask = (task, childId) => ({
  type: EXECUTE_TASK,
  task: task,
  childId: childId,
});


export const addWork = () => ({
  type: ADD_WORK,
});

export const deleteWork = id => ({
  type: DELETE_WORK,
  id,
});

export const updateWork = work => ({
  type: UPDATE_WORK,
  work: work,
});

export const addTask = (workId, childId) => ({
  type: ADD_TASK,
  workId:  workId,
  childId: childId,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  id,
});

export const deleteTaskLog = id => ({
  type: DELETE_TASK_LOG,
  id,
});