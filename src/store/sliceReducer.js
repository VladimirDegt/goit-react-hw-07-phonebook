import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialstate';
import { fetchContacts, addContact, deleteContact } from './operations';
import { handleFulfilled, handlePending, handleRejected, handleAddContactFulfilled, handledeleteContactFulfilled } from './handleFunctions';

const STATUS = {
  pending: 'pending',
  rejected: 'rejected'
};
const {pending, rejected} = STATUS;
const funcList = [fetchContacts, addContact, deleteContact];
const funcUpdate = (status)=> funcList.map(item=>item[status]);

export const sliceReducer = createSlice({
  name: 'phonebook',
  initialState: initialState,

  reducers: {
    filterContact: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContact.fulfilled, handledeleteContactFulfilled)
      .addMatcher(isAnyOf(...funcUpdate(pending)), handlePending)
      .addMatcher(isAnyOf(...funcUpdate(rejected)), handleRejected)
  },
});

export const contactsReducer = sliceReducer.reducer;
export const { filterContact } = sliceReducer.actions;
