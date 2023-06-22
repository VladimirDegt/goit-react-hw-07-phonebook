import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer';
import { contactsReducer } from './sliceReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
