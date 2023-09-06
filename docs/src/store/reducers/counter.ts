import { createSlice } from '@reduxjs/toolkit';

export interface ICounterStoreReducer {
  count: number;
}

export const initialState: ICounterStoreReducer = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetCounter: (state) => {
      state.count = 0;
    },
    increateCounter: (state) => {
      state.count = state.count + 1;
    },
    reduceCounter: (state) => {
      state.count = state.count - 1;
    }
  }
});

export const { resetCounter, increateCounter, reduceCounter } = counterSlice.actions;

export default counterSlice.reducer;
