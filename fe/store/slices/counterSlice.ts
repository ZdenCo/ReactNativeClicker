import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    score: 0,
    incrementor: 1,
    passive: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.score += 1;
    },
    decrement: (state) => {
      state.score -= 1;
    },
    incrementByAmount: (state, action) => {
      state.score += action.payload;
    },
    decrementByAmount: (state, action) => {
      console.log(action.payload);
      console.log(state.score);

      state.score -= action.payload;
      console.log("after", state.score);
    },
    increaseIncrementorByAmount: (state, action) => {
      state.incrementor += action.payload;
    },
    increasePassiveByAmount: (state, action) => {
      state.passive += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  decrementByAmount,
  incrementByAmount,
  increaseIncrementorByAmount,
  increasePassiveByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
