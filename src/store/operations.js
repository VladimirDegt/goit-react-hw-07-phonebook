import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewContacts, fetchAllContacts, deleteContacts } from "utils/api-mockapi";

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

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContacts', async(id, thunkAPI)=>{
  try {
    return await deleteContacts(id);
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message)
  }
});