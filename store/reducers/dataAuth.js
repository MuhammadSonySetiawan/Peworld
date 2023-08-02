import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  
};

const dataAuth = createSlice({
  name: "dataAuth",
  initialState,
  reducers: {
    eddAuth: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { eddAuth } = dataAuth.actions

export default dataAuth.reducer
 