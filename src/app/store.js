import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

// store part. because every redux has to be stored
export const store = configureStore({
    reducer: {
        posts: postsReducer, //store the post texts
        users: usersReducer
    }
})