import { createSlice } from "@reduxjs/toolkit";
import { filtersInitialState } from "./initialstate";

const filtersReducer = createSlice({
  name: 'filter',
  initialState: filtersInitialState,

  reducers: {
    filterContact: (state, {payload})=>{
      return {
        ...state,
        filter: payload
      }
    },
  }
});

export const filterReducer = filtersReducer.reducer;
export const {filterContact} = filtersReducer.actions;