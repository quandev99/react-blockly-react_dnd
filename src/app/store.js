import { configureStore } from "@reduxjs/toolkit";
import { elementReducer } from "../slices/element";
import { appReducer } from "../slices/appSlice";
const store = configureStore({
  reducer: {
    logins: elementReducer,
    app: appReducer,
  },
});

export default store;
