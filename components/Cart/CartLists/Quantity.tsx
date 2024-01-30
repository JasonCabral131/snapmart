/** @format */

import { cart, setQuantity } from '@/redux/Feature/cartSlice';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
type props = {
	product: cart;
};
const Quantity: React.FC<props> = ({ product }) => {
	const dispatch = useDispatch();
	const handleQuantity = useCallback(
		(item: { id: string; quantity: number }) => {
			dispatch(setQuantity(item));
		},
		[]
	);
	return (
		<div className='flex bg-white justify-center items-center'>
			<div
				className='px-2 bg-gray-300 cursor-pointer hover:bg-gray-200'
				onClick={() => {
					handleQuantity({ id: product.id, quantity: -1 });
				}}>
				-
			</div>
			<div className='px-3 text-black text-sm'>{product?.quantity}</div>
			<div
				className='px-2 bg-gray-300 cursor-pointer hover:bg-gray-200'
				onClick={() => {
					handleQuantity({ id: product.id, quantity: +1 });
				}}>
				+
			</div>
		</div>
	);
};

export default React.memo(Quantity);
