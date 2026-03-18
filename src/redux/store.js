import { configureStore } from "@reduxjs/toolkit";
import accountAuthReducer from "./ducks/accountAuth";

const store = configureStore({
  reducer: {
    auth: accountAuthReducer,
  },
});

export default store;
