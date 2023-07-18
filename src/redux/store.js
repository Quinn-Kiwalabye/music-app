import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazam } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazam.reducerPath]: shazam.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazam.middleware),
});

