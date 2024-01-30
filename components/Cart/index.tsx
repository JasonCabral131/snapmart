/** @format */

import { setClearCart } from '@/redux/Feature/cartSlice';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CartLists from './CartLists';
import CartFooter from './CartFooter';

const Cart = () => {
	const dispatch = useDispatch();
	const handleClearCart = useCallback(() => {
		dispatch(setClearCart());
	}, []);
	return (
		<div className='w-1/4 h-screen fixed top-0 right-0 bg-gray-800 text-white p-4'>
			<div className='w-full py-3 flex bg-gray-50  px-2 justify-between relative'>
				<div className='w-3/5 justify-center items-center'>
					<h2 className='text-lg font-semibold mb-4 text-black mt-2 '>
						My Cart
					</h2>
				</div>
				<div className='w-2/5 justify-center h-full '>
					<button
						onClick={handleClearCart}
						className='ml-3 bg-red-500 mt-8 py-2 px-2 cursor-pointer hover:bg-red-400'>
						<span>Clear cart</span>
					</button>
				</div>
			</div>
			<CartLists />
			<CartFooter />
		</div>
	);
};

export default Cart;
