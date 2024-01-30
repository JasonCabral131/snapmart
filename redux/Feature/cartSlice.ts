/** @format */
'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '@/types';

export interface cart extends Product {
	quantity: number;
}
type producttype = {
	cart: cart[];
};
export const CartSlice = createSlice({
	name: 'home',
	initialState: {
		cart: [],
	} as unknown as producttype,
	reducers: {
		setAddCart(state, action: PayloadAction<any>) {
			const { cart } = state;
			const { id } = action.payload;
			const existingProductIndex = cart.findIndex((item) => item.id === id);

			if (existingProductIndex !== -1) {
				// Product already in cart, update quantity
				const updatedCart = cart.map((item, index) =>
					index === existingProductIndex
						? { ...item, quantity: item.quantity + 1 }
						: item
				);

				return { ...state, cart: updatedCart };
			} else {
				// Product not in cart, add to cart with quantity 1
				const updatedCart = [...cart, { ...action.payload, quantity: 1 }];

				return { ...state, cart: updatedCart };
			}
		},
		setClearCart(state) {
			return { ...state, cart: [] };
		},
		setRemoveCartItem(state, action: PayloadAction<any>) {
			const { id } = action.payload;
			const newCart = state?.cart.filter((el) => el?.id !== id);
			return { ...state, cart: newCart };
		},
		setQuantity(
			state,
			action: PayloadAction<{ id: string; quantity: number }>
		) {
			const { id, quantity } = action.payload;
			const { cart } = state;

			// Find the index of the item in the cart
			const existingProductIndex = cart.findIndex((item) => item.id === id);

			if (existingProductIndex !== -1) {
				// Product found in cart
				const updatedCart = cart.map((item, index) => {
					if (index === existingProductIndex) {
						// Update quantity
						const newQuantity = item.quantity + quantity;

						// If new quantity is zero or negative, remove the item
						if (newQuantity <= 0) {
							return null;
						}

						return { ...item, quantity: newQuantity };
					}

					return item;
				});

				// Filter out items with null values (quantity <= 0)
				const filteredCart = updatedCart.filter(
					(item) => item !== null
				) as cart[];

				return { ...state, cart: filteredCart };
			}

			// If the product is not in the cart, do nothing
			return state;
		},
	},
});

export const { setAddCart, setClearCart, setRemoveCartItem, setQuantity } =
	CartSlice.actions;

export default CartSlice.reducer;
