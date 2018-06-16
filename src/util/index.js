import { Asset, Font } from 'expo';

export const formatTasks = (tasks, childId, works) => {
  return tasks.filter(task => task.childId === childId).map(task => {
    task.work = works.reduce((carry, work) => work.id === task.workId ? work : carry);
    return task;
  }).sort((a, b) => a.order - b.order);
};

export const cacheAssetsAsync = ({images = [], fonts = [], videos = [],}) => {
  return Promise.all([
    ...cacheImages(images),
    ...cacheFonts(fonts),
    ...cacheVideos(videos),
  ]);
}

function cacheImages(images) {
  return images.map(image => Asset.fromModule(image).downloadAsync());
}

function cacheVideos(videos) {
  return videos.map(video => Asset.fromModule(video).downloadAsync());
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}
