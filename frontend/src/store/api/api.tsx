import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser } from '../../types/user';

const baseUrl = '/api';

export const cookbookApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    // /account/settings
    getUser: builder.query<IUser, void>({
      query: () => `/account/settings`,
    }),
    // getAllMovie: builder.query({
    //   query: ({ debouncedValue, typeValue, yearValue, page }) =>
    //     `?s=${debouncedValue + apiKey}&type=${typeValue}&y=${yearValue}&page=${page}`,
    // }),
    // getSingleMovie: builder.query({
    //   query: id => `?i=${id + apiKey}`,
    // }),
  }),
});

export const { useGetUserQuery } = cookbookApi;
