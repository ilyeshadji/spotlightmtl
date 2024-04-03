import { RootState } from './store.ts';

export const selectInitStatus = (state: RootState) => state.landing.loading;
