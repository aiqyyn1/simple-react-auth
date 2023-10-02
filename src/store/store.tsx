import { configureStore, combineReducers } from '@reduxjs/toolkit';
import registrationSlice from './reducer/SignUpSlice';
import restoreSlice from './reducer/RestorePasswordSlice';

const rootReducer = combineReducers({
  registration: registrationSlice,
  restore: restoreSlice,
});
export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
