import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser, ArrayRecipe } from '../../types';

const baseUrl = '/api';

export const cookbookApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getUser: builder.query<IUser, void>({
      query: () => `/account/settings`,
    }),
    getAllRecipes: builder.query<ArrayRecipe, void>({
      query: () => `/recipe/all`,
    }),
    getRecipeByTitle: builder.query<ArrayRecipe, string>({
      query: title => `/recipe?title=${title}`,
    }),
  }),
});

export const { useGetUserQuery, useGetRecipeByTitleQuery, useGetAllRecipesQuery } = cookbookApi;
