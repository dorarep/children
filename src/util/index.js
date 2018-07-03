export const formatTasks = (tasks, childId, works) => {
  return tasks.filter(task => task.childId === childId).map(task => {
    task.work = works.reduce((carry, work) => work.id === task.workId ? work : carry);
    return task;
  }).sort((a, b) => a.order - b.order);
};

export const isToday = (date) => {
  const comparedDate = new Date(date);
  const currentDate  = new Date();

  return comparedDate.getFullYear() === currentDate.getFullYear() &&
    comparedDate.getMonth() === currentDate.getMonth() &&
    comparedDate.getDate() === currentDate.getDate()
};

export const generateUuid = () => {
  let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
  for (let i = 0, len = chars.length; i < len; i++) {
    switch (chars[i]) {
      case "x":
        chars[i] = Math.floor(Math.random() * 16).toString(16);
        break;
      case "y":
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
        break;
    }
  }
  return chars.join("");
};

export const workIconImages = [
  require('children/assets/images/works/0.png'),
  require('children/assets/images/works/1.png'),
  require('children/assets/images/works/2.png'),
  require('children/assets/images/works/3.png'),
  require('children/assets/images/works/4.png'),
  require('children/assets/images/works/5.png'),
  require('children/assets/images/works/6.png'),
  require('children/assets/images/works/7.png'),
  require('children/assets/images/works/8.png'),
  require('children/assets/images/works/9.png'),
  require('children/assets/images/works/10.png'),
  require('children/assets/images/works/11.png')
];