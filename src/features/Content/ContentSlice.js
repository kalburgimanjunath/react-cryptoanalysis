import { createSlice, nanoid } from '@reduxjs/toolkit';
const ContentSlice = createSlice({
  name: 'content',
  initialState: [],
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    deletion: (state) => {
      console.log(state);
      state.pop();
    },
  },
  prepare: (text) => {
    const id = nanoid();
    return { payload: { id, text } };
  },
});
// export const { add, delete} = ContentSlice.actions;
// export const { add } = ContentSlice.actions;
export const { add, deletion } = ContentSlice.actions;
export default ContentSlice.reducer;
