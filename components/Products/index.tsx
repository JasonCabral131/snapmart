/** @format */

'use client';
import { RootState } from '@/redux/store';
import { isArray } from 'lodash';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCards from './ProductCards';
import { isEqualString } from '@/utils/function';

const Products = () => {
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState<'high' | 'low' | null>(null);
	const filters = useSelector((state: RootState) => state?.home?.filter);
	let products = useSelector((state: RootState) => state?.product?.products);
	products = !!filters
		? products?.filter((el) => el?.category === filters)
		: products;
	products = !!search
		? products.filter((el) => {
				const searchVal = search.toLowerCase();
				return (
					isEqualString(el?.productName, searchVal) ||
					isEqualString(el?.category, searchVal)
				);
		  })
		: products;

	// Apply sorting
	if (sort) {
		products = products?.slice().sort((a, b) => {
			const priceA = a?.unitPrice || 0;
			const priceB = b?.unitPrice || 0;
			return sort === 'high' ? priceB - priceA : priceA - priceB;
		});
	}
	const high = 'Sort price high to low';
	const low = 'Sort price low to high';
	const sortingTxt = sort ? (sort === 'high' ? low : high) : high;
	const handleOnPress = () => {
		if (sort) {
			return setSort(sort === 'high' ? 'low' : 'high');
		}
		setSort('high');
	};
	return (
		<div className='p-4 justify-center items-center w-2/4 relative'>
			<h1 className='text-2xl font-semibold mb-4 text-black'>SnapMart</h1>
			<input
				value={search}
				onChange={(e) => setSearch(e?.target?.value)}
				type='text'
				placeholder='Search...'
				className='w-full p-2 bg-gray-200 focus:outline-none'
			/>
			<div className='w-full flex justify-end mt-3'>
				<div
					className='cursor-pointer hover:text-gray-400 text-gray-500 text-sm'
					onClick={handleOnPress}>
					<span>{sortingTxt}</span>
				</div>
			</div>
			<div className={'overflow-scroll '}>
				{isArray(products)
					? products?.map((data) => {
							return (
								<ProductCards
									key={data?.id}
									product={data}
								/>
							);
					  })
					: null}
			</div>
		</div>
	);
};

export default Products;
