/** @format */
'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import product from '@/mockData/product.json';
import { groupByCategory } from '@/utils/function';
import { CategorizedProducts, Product } from '@/types';
const productByCatgories = groupByCategory(product);
type producttype = {
	products: Product;
	productsByCategory: CategorizedProducts[];
};
export const ProductSlice = createSlice({
	name: 'home',
	initialState: {
		productsByCategory: productByCatgories as CategorizedProducts[],
		products: product as Product[],
	},
	reducers: {},
});

export default ProductSlice.reducer;
