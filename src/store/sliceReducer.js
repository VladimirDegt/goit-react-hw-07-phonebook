import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialstate';
import { addContact, deleteContact, fetchContacts } from './operations';

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
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handledeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected)
  }
});

export const contactsReducer = sliceReducer.reducer;

