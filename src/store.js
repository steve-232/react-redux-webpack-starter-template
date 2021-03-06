import { createStore, combineReducers, applyMiddleware } from "redux";
import FruitReducer from "./reducers/fruitReducer";
import { createLogger } from "redux-logger";

const env = process.env.NODE_ENV;
const reducers = combineReducers({
  fruit: FruitReducer
});
const middleware = applyMiddleware(createLogger());
let store = null;

if (env === "production") {
  store = createStore(reducers);
} else {
  store = createStore(reducers, middleware);
}

export default store;
