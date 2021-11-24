import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/users/UserSlice';
import contentReducer from '../features/Content/ContentSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    stories: contentReducer,
  },
});
