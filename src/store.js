import { createStore, combineReducers, applyMiddleware } from 'redux'
import fruitReducer from './reducers/fruitReducer'
import { createLogger } from 'redux-logger'

export default createStore(
  combineReducers({
    fruit: fruitReducer
  }),
  applyMiddleware(createLogger())
);
