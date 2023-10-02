import { createSlice } from '@reduxjs/toolkit';
import { ISign } from '../../interface/signup.interface';
import { RootState } from '../store';

export const initialState: ISign = {
  title: '',
  phone: '',
  name: '',
  email: '',
  toggle: false,
};

export const registrationSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFormValues } = registrationSlice.actions;
export const selectRegistration = (state: RootState) => state.registration;
export default registrationSlice.reducer;
