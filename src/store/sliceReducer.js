import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { initialState } from './initialstate';
import { addContact, deleteContact, fetchContacts } from './operations';

const funcList = [fetchContacts, addContact, deleteContact];
const funcUpdate = (status)=> funcList.map(item=>item[status])

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  if(state.contacts.items.some(item=>{
    return item.name.toLowerCase() === payload.name.toLowerCase()
  })) {
    Notify.failure('Такий контакт вже існує!')
    return state
  }
  Notify.success('Контакт додано!');
  state.contacts.items.push(payload);
};

const handledeleteContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  Notify.info('Контакт видалено!')
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== payload.id
  );
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

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
      .addMatcher(isAnyOf(...funcUpdate('pending')), handlePending)
      .addMatcher(isAnyOf(...funcUpdate('rejected')), handleRejected)
  },
});

export const contactsReducer = sliceReducer.reducer;
export const { filterContact } = sliceReducer.actions;
