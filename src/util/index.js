import { Asset, Font } from 'expo';

export const formatTasks = (tasks, childId, works) => {
  return tasks.filter(task => task.childId === childId).map(task => {
    task.work = works.reduce((carry, work) => work.id === task.workId ? work : carry);
    return task;
  }).sort((a, b) => a.order - b.order);
};
