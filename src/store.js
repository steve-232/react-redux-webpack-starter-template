import { createStore, combineReducers, applyMiddleware } from 'redux';
import FruitReducer from './reducers/FruitReducer';
import { createLogger } from 'redux-logger';

export default createStore(
  combineReducers({
    fruit: FruitReducer
  }),
  applyMiddleware(createLogger())
);
