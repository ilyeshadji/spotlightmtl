import { configureStore } from '@reduxjs/toolkit';
import landingReducer from './features/Init/landingSlice.ts';

export const store = configureStore({
    reducer: {
        landing: landingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
