import axios from 'axios';

axios.defaults.baseURL = 'https://6490567b1e6aa71680cb0f7a.mockapi.io';

export async function fetchAllContacts() {
  const result = await axios(`/contacts`);

  return result.data;
};