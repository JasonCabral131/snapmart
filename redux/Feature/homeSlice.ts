/** @format */
'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const HomeSlice = createSlice({
	name: 'home',
	initialState: {
		toggleSideBar: false,
		filter: '',
	},
	reducers: {
		setFilter(state, action: PayloadAction<any>) {
			return { ...state, filter: action?.payload };
		},
	},
});

export const { setFilter } = HomeSlice.actions;

export default HomeSlice.reducer;
