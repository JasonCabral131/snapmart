/** @format */

import { setAddCart } from '@/redux/Feature/cartSlice';
import { Product } from '@/types';
import { formatCurrency } from '@/utils/function';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
type props = {
	product: Product;
};
const ProductCards: React.FC<props> = ({ product }) => {
	const dispatch = useDispatch();

	const handlePress = useCallback((item: Product) => {
		dispatch(setAddCart(item));
	}, []);
	return (
		<div className='flex justify-between w-full mt-4 p-4 bg-gray-200 space-x-2'>
			<div className='flex w-4/5'>
				<Image
					src={product?.imageUrl}
					width={70}
					height={50}
					alt={product?.productName}
				/>
				<div className='ml-4'>
					<h2 className='font-semibold text-lg'>{product?.productName}</h2>
					<h3 className='text-sm font-normal text-green-600'>
						{product?.category}
					</h3>
					<p className='font-normal text-xs text-justify mt-3 '>
						{product?.description}
					</p>
				</div>
			</div>
			<div className='flex flex-col  px-3 w-1/5 px-1'>
				<h3 className='font-sm text-lg text-red-500 font-semibold'>
					₱{formatCurrency(product?.unitPrice)}
				</h3>
				<button
					onClick={() => handlePress(product)}
					className='mt-2 w-full hover:bg-green-300 bg-green-400 py-1 px-2'>
					<span className='font-semibold text-black text-sm'>Add to cart</span>
				</button>
			</div>
		</div>
	);
};

export default React.memo(ProductCards);
