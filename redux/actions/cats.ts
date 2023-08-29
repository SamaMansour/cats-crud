/* eslint-disable*/
// actions/cats.js
export const ADD_CAT = 'ADD_CAT';

export function addCat(cat) {
  return {
    type: ADD_CAT,
    cat
  };
}
