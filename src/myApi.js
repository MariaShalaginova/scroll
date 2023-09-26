import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from "axios";
// import React, { useState, useEffect, createRef, useRef } from 'react';

const url = 'https://jsonplaceholder.typicode.com/';



 export const postsApi = createApi({

    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: url }),
   endpoints: (builder) => ({
    getPosts: builder.query({
             query: (page) => `posts?offset=${page * 20}&limit=20`,
             serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
              },
              //слияние данных
              merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
              },
              // Refetch, когда page arg изменяются
              forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
              }
            })
          })
        });
             

export const { useGetPostsQuery  } = postsApi;