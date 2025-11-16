import { configureStore } from '@reduxjs/toolkit';
import subscriptionsReducer from './reducers/subscriptionReducer';

export const store = configureStore({
  reducer: {
    subscriptions: subscriptionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
