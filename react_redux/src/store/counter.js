
import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", //can be any name
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //this form of modification is OK, beacuse we wont manipulate the existing state
      //it is ensured by react
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;