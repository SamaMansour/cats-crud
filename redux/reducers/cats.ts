/* eslint-disable */
// reducers/cats.js
import { ADD_CAT } from '../actions/cats';
import { DELETE_CAT } from '../actions/cats';
import { EDIT_CAT } from '../actions/cats';



const initialState = [];

function catsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CAT:
      return [...state, action.cat];
    case DELETE_CAT:
      return state.filter(cat => cat.id !== action.catId);
    case EDIT_CAT:
      return state.map(cat => 
        cat.id === action.catId ? action.updatedCat : cat
      );
    default:
      return state;
  }
}



export default catsReducer;
