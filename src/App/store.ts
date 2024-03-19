// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';

const store = configureStore({
 reducer: {},
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
      },
    }),
});

const api = createApi({
  baseQuery: () => {},
  endpoints: build => ({
    pokemonList: build.query({
      queryFn() {
        return { data: {name: "Pickachu"}}
      }
    }),
    pokemonDetail: build.query({
      queryFn() {
        return { data: {name: "Pickachu"}}
      }
    })
  })
})

const { usePokemonListQuery, usePokemonDetailQuery } = api;

/*
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
*/

export default store;
