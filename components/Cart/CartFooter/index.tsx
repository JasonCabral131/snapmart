/** @format */
'use client';
import Modal from '@/components/Modal';
import { setClearCart } from '@/redux/Feature/cartSlice';
import { RootState } from '@/redux/store';
import { formatCurrency } from '@/utils/function';
import { isArray } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CartFooter = () => {
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	const carts = useSelector((state: RootState) => state?.cart?.cart);
	const cartPay = isArray(carts)
		? carts?.reduce(
				(act, current) => {
					act.quantity = act?.quantity + current?.quantity;
					act.totalAmount =
						act?.totalAmount +
						parseFloat(current?.unitPrice as unknown as string) *
							current?.quantity;
					return act;
				},
				{ quantity: 0, totalAmount: 0.0 }
		  )
		: { quantity: 0, totalAmount: 0.0 };
	const handleChecked = useCallback(() => {
		setShowModal(true);
		dispatch(setClearCart());
	}, []);
	useEffect(() => {
		if (showModal) {
			setTimeout(() => {
				setShowModal(false);
			}, 2500);
		}
	}, [dispatch, showModal]);
	return (
		<div className='w-full h-2/6 pb-8 pt-5 bg-gray-200 mt-1'>
			<div className='flex justify-between items-center px-5'>
				<h1 className='text-black text-xl font-semibold'>Total Items:</h1>
				<h1 className='text-red-500 text-lg font-semibold'>
					{cartPay?.quantity}
				</h1>
			</div>
			<div className='flex justify-between items-center px-5 mt-3'>
				<h1 className='text-black text-xl font-semibold'>Total Amount:</h1>
				<h1 className='text-red-500 text-lg font-semibold'>
					₱{formatCurrency(cartPay?.totalAmount)}
				</h1>
			</div>
			<div className='w-full -mt-3 justify-center items-center'>
				<button
					onClick={() => handleChecked()}
					className='ml-3 bg-green-500 mt-8 py-2 px-2 cursor-pointer hover:bg-green-400  w-11/12'>
					<span>Checked</span>
				</button>
			</div>
			<Modal
				setShow={setShowModal}
				show={showModal}>
				<div className=' bg-white p-7'>
					<h1 className='text-black text-xl font-semibold'>
						Thank you for purchasing
					</h1>
				</div>
			</Modal>
		</div>
	);
};

export default CartFooter;
