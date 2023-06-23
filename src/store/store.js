import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer';
import { contactsReducer } from './contactsReducer';
import { contactApi } from 'rtk-query/api-RTKQuery';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>[...getDefaultMiddleware(), contactApi.middleware],
});
