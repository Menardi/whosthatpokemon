import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

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
  storage,
  stateReconciler: autoMergeLevel2,
  timeout: 0,
  // @ts-expect-error The redux-persist types are not quite right
}, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
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
