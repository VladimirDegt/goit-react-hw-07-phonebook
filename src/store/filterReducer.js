import { createSlice } from '@reduxjs/toolkit';
import { filtersInitialState } from './initialstate';

const filtersReducer = createSlice({
  name: 'filter',
  initialState: filtersInitialState,

  reducers: {
    filterContact: (_, { payload }) => {
      return ({filter: payload});
    },
  },
});

export const filterReducer = filtersReducer.reducer;
export const { filterContact } = filtersReducer.actions;
