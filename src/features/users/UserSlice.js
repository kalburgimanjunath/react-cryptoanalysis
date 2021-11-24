import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    id: 1,
    name: 'manjunath',
    firstname: 'manjunath',
    lastname: 'kalburgi',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  },
  reducers: {
    add: (state, newValue) => {
      // console.log(newValue);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name.push(newValue);
    },
    delete: (state) => {
      state.name = state.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = userSlice.actions;

export default userSlice.reducer;
