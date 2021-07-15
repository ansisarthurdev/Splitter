import { createSlice } from '@reduxjs/toolkit';

export const billSlice = createSlice({
  name: 'app',

  initialState: {
    bill: '',
    percentage: ''
  },

  reducers: {
    updateBill: (app, action) => {
      app.bill = action.payload;
    },
    updatePercentage: (app, action) => {
      app.percentage = action.payload;
    }

  },

});

export const { updateBill, updatePercentage } = billSlice.actions;

export const selectBill = (app) => app.bill;
export const selectPercentage = (app) => app.percentage;

export default billSlice.reducer;