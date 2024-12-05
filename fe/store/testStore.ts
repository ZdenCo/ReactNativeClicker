import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // For web, use AsyncStorage for React Native
import counterSlice from "@/store/slices/counterSlice";
import progressionSlice from "./slices/progressionSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// Combine slices into a persisted reducer
const rootReducer = combineReducers({
  progression: progressionSlice,
  counter: counterSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer, //
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable warnings for non-serializable data
    }),
});

const persistor = persistStore(store);

export { store, persistor };
