import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
  
// import reducers...
import userReducer from "./userSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  //const rootReducer = combineReducers({ user:userReducer, cart:cartReducer })
  const persistedReducer = persistReducer(persistConfig, userReducer)
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  
  export const persistor = persistStore(store)
