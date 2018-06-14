import {
  SELECT_CHILD,
} from 'children/src/action_types';

export default (state = 0, action) => {
  switch (action.type) {
    case SELECT_CHILD:
      return action.id ? action.id : 0;
    default:
      return state;
  }
};
