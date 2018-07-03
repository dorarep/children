import {
  DELETE_WORK,
  ADD_WORK,
  UPDATE_WORK,
} from 'children/src/action_types';

const initialWorks = [
  {
    id: 0,
    name: '手洗い',
    icon: 'delete',
    point: 3,
  }, {
    id: 1,
    name: '歯磨き',
    icon: 'delete',
    point: 3,
  }, {
    id: 2,
    name: '勉強',
    icon: 'delete',
    point: 3,
  }, {
    id: 3,
    name: '洗顔物干し',
    icon: 'face',
    point: 3,
  }, {
    id: 4,
    name: 'おつかい',
    icon: 'shop',
    point: 3,
  }, {
    id: 5,
    name: 'お料理',
    icon: 'delete',
    point: 3,
  }, {
    id: 6,
    name: 'おそうじ',
    icon: 'delete',
    point: 3,
  }, {
    id: 7,
    name: 'お風呂洗い',
    icon: 'delete',
    point: 3,
  }, {
    id: 8,
    name: 'トイレ掃除',
    icon: 'delete',
    point: 3,
  }, {
    id: 9,
    name: 'ゴミ捨て',
    icon: 'delete',
    point: 3,
  }, {
    id: 10,
    name: '水やり',
    icon: 'delete',
    point: 3,
  }, {
    id: 11,
    name: 'ベッドメイキング',
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
          name:  '新しい作業',
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
