import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./sliceReducer";

export const store = configureStore({ reducer });





