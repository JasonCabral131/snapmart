/** @format */

import { cart, setRemoveCartItem } from '@/redux/Feature/cartSlice';
import { RootState } from '@/redux/store';
import { formatCurrency } from '@/utils/function';
import { isArray } from 'lodash';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Quantity from './Quantity';

const CartLists = () => {
	const dispatch = useDispatch();
	const carts = useSelector((state: RootState) => state?.cart?.cart);
	const handleRemoveCart = useCallback((item: cart) => {
		dispatch(setRemoveCartItem(item));
	}, []);
	return (
		<div className='overflow-scroll relative px-2 mt-3 h-4/6'>
			{isArray(carts)
				? carts?.map((cart) => {
						return (
							<div
								key={cart?.id}
								className='w-full p-2 relative mt-2 border-b border-blue-200 py-3'>
								<div
									onClick={() => handleRemoveCart(cart)}
									className='rounded-full absolute -left-1 top-2 flex justify-center  items-center p-2 bg-red-500 cursor-pointer hover:bg-red-400 w-5 h-5'>
									<span className='text-xs'>x</span>
								</div>
								<div className='flex w-full space-x-2'>
									<Image
										src={cart?.imageUrl}
										width={60}
										height={80}
										alt={cart?.productName}
										className='object-contain'
									/>
									<div className='ml-2 w-full'>
										<h2 className='capitalize line-clamp-2'>
											{cart?.productName}
										</h2>
										<div className='flex justify-between items-center'>
											<div className='flex justify-start'>
												<h3 className='font-sm text-sm text-red-500 font-semibold mt-3'>
													₱
													{formatCurrency(
														parseFloat(cart?.unitPrice as unknown as string) *
															cart.quantity
													)}
												</h3>
											</div>
											<div className='flex justify-end'>
												<Quantity product={cart} />
											</div>
										</div>
									</div>
								</div>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default CartLists;
