import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialstate';
import { fetchAllContacts } from 'utils/api-mockapi';

export const getContactsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(sliceReducer.actions.fetching())
      const data = await fetchAllContacts();
      dispatch(sliceReducer.actions.fetchSuccess(data))
    } catch (error) {
      dispatch(sliceReducer.actions.fetchError(error))
    }
  }
}

export const sliceReducer = createSlice({
  name: 'phonebook',
  initialState: initialState,
  reducers: {
    fetching: state => {
      state.contacts.isLoading = true;
    },
    fetchSuccess: (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    fetchError: (state, {payload})=> {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    addContact: (state, {payload}) => {
      state.contacts.items.push(payload);
    }
  },
});

export const reducer = sliceReducer.reducer;
export const { fetching, fetchSuccess, fetchError, addContact } =
  sliceReducer.actions;
