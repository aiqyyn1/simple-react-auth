import { createSlice } from '@reduxjs/toolkit';
import { IRestore } from '../../interface/restorepassword.interface';

export const initialState: IRestore = {
  title: '',
  phone: '',
};

export const restoreSlice = createSlice({
  name: 'restore',
  initialState,
  reducers: {
    setFormValuesRestore: (state, action) => {
      return action.payload;
    },
  },
});
export const { setFormValuesRestore } = restoreSlice.actions;
export default restoreSlice.reducer;
