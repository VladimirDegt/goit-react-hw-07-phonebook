import axios from 'axios';

axios.defaults.baseURL = 'https://6490567b1e6aa71680cb0f7a.mockapi.io';

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
