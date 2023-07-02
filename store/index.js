import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./reducers/counterSlice";
import dataAuth from "./reducers/dataAuth";


export const store = configureStore({
  reducer: {
    counterSlice,
    dataAuth,
  }, 
});
