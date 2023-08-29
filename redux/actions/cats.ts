/* eslint-disable */
// actions/cats.js
export const ADD_CAT = 'ADD_CAT';
export const DELETE_CAT = 'DELETE_CAT';
export const EDIT_CAT = 'EDIT_CAT';



export function addCat(cat) {
  return {
    type: ADD_CAT,
    cat
  };
}

export function deleteCat(catId) {
  return {
    type: DELETE_CAT,
    catId
  };
}


export function editCat(catId, updatedCat) {
  return {
    type: EDIT_CAT,
    catId,
    updatedCat
  };
}

