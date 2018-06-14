import {
  DELETE_WORK,
  ADD_WORK,
  UPDATE_WORK,
} from 'children/src/action_types';

const initialWorks = [
  {
    id: 0,
    name: '洗顔',
    icon: 'face',
    point: 3,
  }, {
    id: 1,
    name: 'おつかい',
    icon: 'shop',
    point: 3,
  }, {
    id: 2,
    name: 'おそうじ',
    icon: 'delete',
    point: 3,
  },
];

export default (state = initialWorks, action) => {
  switch (action.type) {
    case DELETE_WORK:
      return state.filter(child => child.id !== action.id);
    case ADD_WORK:
      return [
        ...state,
        {
          id:    new Date().getTime(),
          name:  '新しい仕事',
          icon:  'label',
          point: 3,
        },
      ];
    case UPDATE_WORK:
      const {
        id, name, icon, point,
      } = action.work;

      return state.map(work => (work.id === id ? {
        id:      id,
        name:    name    || work.name,
        icon:    icon    || work.icon,
        point:   point   || work.point,
      } : work));
  }
  return state;
};
