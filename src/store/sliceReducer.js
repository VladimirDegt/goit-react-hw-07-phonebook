import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialstate';
import { addNewContacts, fetchAllContacts } from 'utils/api-mockapi';

export const getContactsThunk = createAsyncThunk('contacts/getContacts', async(arg, thunkAPI)=>{
  try {
    return await fetchAllContacts();
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const addContactsThunk = createAsyncThunk('contacts/addContacts', async(newContact, thunkAPI)=>{
  try {
    return await addNewContacts(newContact);
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message)
  }
});

const handlePending = (state)=>{state.contacts.isLoading = true};

const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};

const handleaddContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items.push(payload);
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
      .addCase(addContactsThunk.fulfilled, handleaddContactFulfilled)
      .addCase(addContactsThunk.rejected, handleRejected)
  }
});

export const contactsReducer = sliceReducer.reducer;

