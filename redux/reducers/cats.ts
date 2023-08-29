// reducers/cats.js
import { ADD_CAT } from '../actions/cats';

const initialState = [];

function catsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CAT:
      return [...state, action.cat];
    default:
      return state;
  }
}

export default catsReducer;
