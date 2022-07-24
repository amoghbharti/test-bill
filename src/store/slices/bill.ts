import { createSlice } from '@reduxjs/toolkit';

const billSlice = createSlice({
  name: 'bill',
  initialState: {
    value: 0,
  },
  reducers: {
    billList: (state) => {},
    billDetail: (state) => {},
  },
});

export default billSlice.reducer;
export const { billList, billDetail } = billSlice.actions;
