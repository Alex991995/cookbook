import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser, ArrayRecipe, ArrayCookbook } from '../../types';

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
    getAllCookbooks: builder.query<ArrayCookbook, void>({
      query: () => `/cookbook/all`,
    }),
  }),
});

export const { useGetUserQuery, useGetRecipeByTitleQuery, useGetAllRecipesQuery, useGetAllCookbooksQuery } = cookbookApi;
