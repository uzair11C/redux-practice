import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/slices/counterSlice";
import usersReducer from "./features/slices/fetchUsersSlice";
import resourcesReducer from "./features/slices/fetchResSlice";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage
// }

const newReducer = combineReducers({
  counter: counterReducer,
  getusers: usersReducer,
  getresources: resourcesReducer,
});

// const persistedReducer = persistReducer(persistConfig, newReducer)

// const useAppDispatch = () => store.dispatch

export const store = configureStore({
  reducer: {
    allReducers: newReducer,
  },
});
