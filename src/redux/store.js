import { combineReducers, createStore } from "redux";
import accountAuthReducer from "./ducks/accountAuth";

const reducer = combineReducers({
  auth: accountAuthReducer,
});

const store = createStore(reducer);

export default store;
