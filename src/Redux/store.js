import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
export default configureStore({
  reducer: {
    user: userReducer
  }
});

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(logger))
);
