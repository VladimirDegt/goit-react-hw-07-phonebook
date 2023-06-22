import { Notify } from "notiflix";

export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};

export const handleAddContactFulfilled = (state, { payload }) => {
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

export const handledeleteContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  Notify.info('Контакт видалено!')
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== payload.id
  );
};

export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};