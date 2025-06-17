import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  IUser,
  ArrayRecipe,
  ArrayCookbook,
  Recipe,
  IResultCreatedComment,
  ArrayCommentRecipe,
  Cookbook,
  ArrayCommentCookbook,
} from '../../types';

const baseUrl = '/api';

export const cookbookApi = createApi({
  reducerPath: 'cookbookApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['User', 'Recipe', 'Cookbook', 'CommentCookbook', 'CommentRecipe'],
  endpoints: builder => ({
    getUser: builder.query<IUser, void>({
      query: () => `/account/settings`,
      providesTags: ['User'],
    }),

    logOut: builder.mutation<null, void>({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),

    getTrendRecipes: builder.query<ArrayRecipe, void>({
      query: () => `/recipe/trend`,
    }),

    getAllUserRecipes: builder.query<ArrayRecipe, void>({
      query: () => `/recipe/all-user`,
      providesTags: ['Recipe'],
      keepUnusedDataFor: 0,
    }),
    getAllRecipes: builder.query<ArrayRecipe, { sort: string; time: string }>({
      query: ({ sort, time }) => `/recipe/all?sort=${sort}&time=${time}`,
      keepUnusedDataFor: 0,
    }),

    getRecipesWithoutSort: builder.query<ArrayRecipe, void>({
      query: () => `/recipe/all-without-sort`,
      keepUnusedDataFor: 0,
    }),

    getRecipeByTitle: builder.query<ArrayRecipe, string>({
      query: title => `/recipe?title=${title}`,
    }),

    getUniqueRecipeByID: builder.query<Recipe, string>({
      query: id => `/recipe/${id}`,
      providesTags: ['Recipe'],
      keepUnusedDataFor: 0,
    }),

    getAllUserCookbooks: builder.query<ArrayCookbook, void>({
      query: () => `/cookbook/all-user`,
      providesTags: ['Cookbook'],
      keepUnusedDataFor: 0,
    }),

    getAllCookbooks: builder.query<ArrayCookbook, void>({
      query: () => `/cookbook/all`,
      providesTags: ['Cookbook'],
      keepUnusedDataFor: 0,
    }),

    getPopularCookbooks: builder.query<ArrayCookbook, void>({
      query: () => `/cookbook/most-popular`,
    }),

    getUniqueCookbookByID: builder.query<Cookbook, string>({
      query: id => `/cookbook/${id}`,
      providesTags: ['Cookbook'],
      keepUnusedDataFor: 0,
    }),

    getAllCommentRecipe: builder.query<ArrayCommentRecipe, string>({
      query: id => `/recipe/comment/${id}`,
      providesTags: ['CommentRecipe'],
    }),

    getAllCommentCookbook: builder.query<ArrayCommentCookbook, string>({
      query: id => `/cookbook/comment/${id}`,
      providesTags: ['CommentCookbook'],
    }),

    createCommentRecipe: builder.mutation<
      IResultCreatedComment,
      { description: string; recipe_id: string }
    >({
      query: obj => ({
        url: `/recipe/comment`,
        method: 'POST',
        body: obj,
      }),
      invalidatesTags: ['CommentRecipe'],
    }),

    createCommentCookbook: builder.mutation<
      IResultCreatedComment,
      { description: string; cookbook_id: string }
    >({
      query: obj => ({
        url: `/cookbook/comment`,
        method: 'POST',
        body: obj,
      }),
      invalidatesTags: ['CommentCookbook'],
    }),

    addLikeToRecipe: builder.mutation<null, string>({
      query: id => ({
        url: `/recipe/like/${id}`,
        method: 'POST',
        body: id,
      }),
    }),

    addLikeToCookbook: builder.mutation<null, string>({
      query: id => ({
        url: `/cookbook/like/${id}`,
        method: 'POST',
        body: id,
      }),
      invalidatesTags: ['Cookbook'],
    }),

    addViewsToRecipe: builder.mutation<null, string>({
      query: id => ({
        url: `/recipe/views/${id}`,
        method: 'POST',
        body: id,
      }),
      invalidatesTags: ['Recipe'],
    }),

    addViewsToCookbook: builder.mutation<null, string>({
      query: id => ({
        url: `/cookbook/views/${id}`,
        method: 'POST',
        body: id,
      }),
      invalidatesTags: ['Cookbook'],
    }),

    addRecipeToMyCookbook: builder.mutation<null, { cookbook_id: string; recipesID: string }>({
      query: obj => ({
        url: `/cookbook`,
        method: 'PUT',
        body: obj,
      }),
    }),

    addExistedCookbookToUser: builder.mutation<null, string>({
      query: id => ({
        url: `/cookbook/add-cookbook/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Cookbook'],
    }),

    deleteRecipe: builder.mutation<null, string>({
      query: id => ({
        url: `/recipe/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Recipe'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useLogOutMutation,

  useGetRecipesWithoutSortQuery,
  useGetRecipeByTitleQuery,
  useGetAllUserRecipesQuery,
  useGetAllRecipesQuery,
  useGetUniqueRecipeByIDQuery,
  useGetTrendRecipesQuery,
  useDeleteRecipeMutation,

  useGetAllCookbooksQuery,
  useGetAllUserCookbooksQuery,
  useGetUniqueCookbookByIDQuery,
  useGetPopularCookbooksQuery,
  useAddRecipeToMyCookbookMutation,
  useAddExistedCookbookToUserMutation,

  useCreateCommentRecipeMutation,
  useCreateCommentCookbookMutation,
  useGetAllCommentRecipeQuery,
  useGetAllCommentCookbookQuery,

  useAddLikeToRecipeMutation,
  useAddLikeToCookbookMutation,
  useAddViewsToRecipeMutation,
  useAddViewsToCookbookMutation,
} = cookbookApi;
