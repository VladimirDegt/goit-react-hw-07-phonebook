import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialstate';
import { addContactsThunk, deleteContactsThunk, getContactsThunk } from './operations';

const handlePending = (state)=>{state.contacts.isLoading = true};

const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items.push(payload);
};

const handledeleteContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = state.contacts.items.filter(item=>item.id !== payload.id);
};

const handleRejected = (state, {payload})=> {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const sliceReducer = createSlice({
  name: 'phonebook',
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleAddContactFulfilled)
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handledeleteContactFulfilled)
      .addCase(deleteContactsThunk.rejected, handleRejected)
  }
});

export const contactsReducer = sliceReducer.reducer;

