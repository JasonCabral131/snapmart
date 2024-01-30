/** @format */
'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ProductSlice from './Feature/productSlice';
import HomeSlice from './Feature/homeSlice';
import CartSlice from './Feature/cartSlice';
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	product: ProductSlice,
	home: HomeSlice,
	cart: CartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
