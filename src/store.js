import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from './myApi';

export const store = configureStore({
    reducer: {
        // Добавляем редьюсер как слайс
        [postsApi.reducerPath]: postsApi.reducer
    },
    // Добавляем апи мидлвар, что даст нам кэширование, инвалидацию, полинг,
    // и другие полезные штуки
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
})

// Это нужно для refetchOnFocus/refetchOnReconnect 
setupListeners(store.dispatch)