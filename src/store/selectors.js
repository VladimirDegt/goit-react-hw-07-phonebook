export const selectContactsState = state => state.contacts;
export const selectFilterState = state => state.filters;

// export  const selectFilteredContacts = state => {
//   const { items } = selectContactsState(state);
//   const { filter } = selectFilterState(state);

//   return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
// };

