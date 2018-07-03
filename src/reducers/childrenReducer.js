import {
  ADD_CHILD,
  DELETE_CHILD,
  UPDATE_CHILD,
  EXECUTE_TASK,
} from 'children/src/action_types';

const defaultChild = [{
  id: 0,
  name: 'たろう',
  picture: null,
  point: 0,
}];

export default (state = defaultChild, action) => {
  switch (action.type) {
    case ADD_CHILD:
      return [
        ...state,
        {
          id: new Date().getTime(),
          name: '新しいこども',
          picture: null,
          point: 0,
        },
      ];
    case DELETE_CHILD:
      return state.filter(child => child.id !== action.id);
    case UPDATE_CHILD:
      const {
        id, name, picture, point,
      } = action.child;

      return state.map(child => (child.id === id ? {
        id:      id,
        name:    name || child.name,
        picture: picture || child.picture,
        point:   point || child.point,
      } : child));
    case EXECUTE_TASK:
      return state.map(child => (child.id === action.childId ? {
        id:      child.id,
        name:    child.name,
        picture: child.picture,
        point:   child.point + action.task.work.point,
      } : child));
  }
  return state;
};

