import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./sliceReducer";

export const store = configureStore({ 
  reducer: {
    contacts: contactsReducer,
    // filters: filtersReducer
  }

});





