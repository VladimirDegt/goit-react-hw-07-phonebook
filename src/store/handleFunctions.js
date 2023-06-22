import { Notify } from 'notiflix';

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

export const handleAddContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  if (
    state.items.some(item => {
      return item.name.toLowerCase() === payload.name.toLowerCase();
    })
  ) {
    Notify.failure('Такий контакт вже існує!');
    return state;
  }
  Notify.success('Контакт додано!');
  state.items.push(payload);
};

export const handledeleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  Notify.info('Контакт видалено!');
  state.items = state.items.filter(item => item.id !== payload.id);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
