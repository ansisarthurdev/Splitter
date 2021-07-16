import { createSlice } from '@reduxjs/toolkit';

export const billSlice = createSlice({
  name: 'app',

  initialState: {
    bill: '',
    percentage: '',
    persons: ''
  },

  reducers: {
    updateBill: (app, action) => {
      app.bill = action.payload;
    },
    updatePercentage: (app, action) => {
      app.percentage = action.payload;
    },
    updatePersons: (app, action) => {
      app.persons = action.payload;
    }

  },

});

export const { updateBill, updatePercentage, updatePersons } = billSlice.actions;

export const selectBill = (state) => state.app.bill;
export const selectPercentage = (state) => state.app.percentage;
export const selectPersons = (state) => state.app.persons;

export default billSlice.reducer;