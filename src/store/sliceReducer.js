import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialstate';
import { fetchAllContacts } from 'utils/api-mockapi';

export const getContactsThunk = createAsyncThunk('contacts/getContacts', async()=>{
  return await fetchAllContacts()
})

const handlePending = (state)=>{state.contacts.isLoading = true};

const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
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
  }
});

export const reducer = sliceReducer.reducer;

