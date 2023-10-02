import { createSlice } from '@reduxjs/toolkit';
import { ISign } from '../../interface/signup.interface';
import { RootState } from '../store';
import { ISignIn } from '../../interface/sigin.interface';

export const initialState: ISignIn = {
  title: '',
  phone: '',
  password:''
};

export const registrationSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setFormValuesSigIn: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFormValuesSigIn } = registrationSlice.actions;
export const selectRegistration = (state: RootState) => state.registration;
export default registrationSlice.reducer;
