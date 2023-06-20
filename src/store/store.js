import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceReducer';
// import { filterReducer } from "./filterReducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filters: filterReducer
  },
});
