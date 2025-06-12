import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser, ArrayRecipe, ArrayCookbook, Recipe } from '../../types';

const baseUrl = '/api';

export const cookbookApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getUser: builder.query<IUser, void>({
      query: () => `/account/settings`,
    }),
    getAllUserRecipes: builder.query<ArrayRecipe, void>({
      query: () => `/recipe/all-user`,
    }),
    getAllRecipes: builder.query<ArrayRecipe, { sort: string; time: string }>({
      query: ({ sort, time }) => `/recipe/all?sort=${sort}&time=${time}`,
      keepUnusedDataFor: 0,

    }),
    getRecipeByTitle: builder.query<ArrayRecipe, string>({
      query: title => `/recipe?title=${title}`,
    }),

    getUniqueRecipeByID: builder.query<Recipe, string>({
      query: id => `/recipe/${id}`,
    }),

    getAllUserCookbooks: builder.query<ArrayCookbook, void>({
      query: () => `/cookbook/all-user`,
    }),
    getAllCookbooks: builder.query<ArrayCookbook, void>({
      query: () => `/cookbook/all`,
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetRecipeByTitleQuery,
  useGetAllUserRecipesQuery,
  useGetAllRecipesQuery,
  useGetUniqueRecipeByIDQuery,
  useGetAllCookbooksQuery,
  useGetAllUserCookbooksQuery,
} = cookbookApi;
