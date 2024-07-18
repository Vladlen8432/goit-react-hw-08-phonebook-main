import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contactsReducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authReducer';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contactsReducer';

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const productsConfig = {
//     key: 'products',
//     storage,
//     whitelist: ['products'],
//   };

// const authConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
//   };

// export const store = configureStore({
//   reducer: {
//     contactsReducer: contactsReducer,
//   },
// middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
