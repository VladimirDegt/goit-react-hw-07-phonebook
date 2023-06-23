import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6490567b1e6aa71680cb0f7a.mockapi.io' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({}), `/contacts`,
    })
  }),
})

export const { useGetContactsQuery } = contactApi;