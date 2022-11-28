// Ducks Pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // TODO: increment
    // its okay to do this because of immer
    incremented(state) {
      state.value++;
    },
    amountAdded(state, actions: PayloadAction<number>) {
      state.value += actions.payload;
    },
    // TODO: decrement

    // TODO: reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
