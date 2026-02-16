import { persistReducer, persistStore, ALL_PERSIST_ACTIONS } from '@menardi/redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { gameSlice } from './gameSlice';
import { settingsSlice } from './settingsSlice';
import { statsSlice } from './statsSlice';

const rootReducer = combineReducers({
  [gameSlice.name]: gameSlice.reducer,
  [settingsSlice.name]: settingsSlice.reducer,
  [statsSlice.name]: statsSlice.reducer,
});

const persistedReducer = persistReducer({
  key: 'wtp',
  version: 1,
  storage: localStorage,
}, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ALL_PERSIST_ACTIONS,
      },
    })
  ),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
