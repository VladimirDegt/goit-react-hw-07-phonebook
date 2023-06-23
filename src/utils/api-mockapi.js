import axios from 'axios';

axios.defaults.baseURL = ' ';

export async function fetchAllContacts() {
  const result = await axios(`/contacts`);

  return result.data;
}

export async function addNewContacts(newContact) {
  const result = await axios.post(`/contacts`, newContact);

  return result.data;
}

export async function deleteContacts(id) {
  const result = await axios.delete(`/contacts/${id}`);

  return result.data;
}
