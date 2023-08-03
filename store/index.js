import { combineReducers,configureStore } from "@reduxjs/toolkit"; 
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterSlice from "./reducers/counterSlice";
import dataAuth from "./reducers/dataAuth";
import hireSlice from "./reducers/hireSlice";


const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  counterSlice,
})

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
  reducer: {
    persistedReducer,
    dataAuth,
    hireSlice,
  },
});
