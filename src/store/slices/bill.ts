import { createSlice } from '@reduxjs/toolkit';

const billSlice = createSlice({
  name: 'bill',
  initialState: {
    value: 0,
  },
  reducers: {
    billList: (state) => {},
    billDetail: (state) => {
      state.value -= 1;
    },
  },
});

export default billSlice;
export const { billList, billDetail } = billSlice.actions;
