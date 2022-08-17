import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {characterService} from './services/characterService';

export const store = configureStore({
  reducer: combineReducers({
    [characterService.reducerPath]: characterService.reducer,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([characterService.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
