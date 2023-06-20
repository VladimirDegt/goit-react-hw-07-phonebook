import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewContacts, fetchAllContacts, deleteContacts } from "utils/api-mockapi";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(arg, thunkAPI)=>{
  try {
    return await fetchAllContacts();
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async(newContact, thunkAPI)=>{
  try {
    return await addNewContacts(newContact);
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI)=>{
  try {
    return await deleteContacts(id);
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message)
  }
});