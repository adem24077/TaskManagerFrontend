import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loadingSlice";
import { usersReducer } from "./users/usersSlice";
import { authSlice } from "./auth/authSlice";
import { taskSlice } from "./tasks/taskSlice";

const rootReducer = combineReducers({
  loading: loadingReducer,
  users: usersReducer,
  tasks: taskSlice.reducer,
  auth: authSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  storeAuthState(store.getState().auth);
  storeTaskState(store.getState().tasks);
});
