import { configureStore } from '@reduxjs/toolkit';
import { cookbookApi } from './api/api';

export const store = configureStore({
  reducer: {
    // movies: movieSlice,
    [cookbookApi.reducerPath]: cookbookApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cookbookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
