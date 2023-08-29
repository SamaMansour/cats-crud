// store.js
import { createStore, combineReducers } from 'redux';
import catsReducer from './reducers/cats';

const rootReducer = combineReducers({
  cats: catsReducer
});

const store = createStore(rootReducer);

export default store;
