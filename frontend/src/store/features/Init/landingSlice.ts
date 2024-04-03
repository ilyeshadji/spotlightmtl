import { createSlice } from '@reduxjs/toolkit';

export interface LandingState {
    loading: boolean;
}

const initialState: LandingState = {
    loading: true,
};

export const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {
        initDone: (state) => {
            state.loading = false;
        },
    },
});

export const { initDone } = landingSlice.actions;

export default landingSlice.reducer;
