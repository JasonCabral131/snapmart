/** @format */
'use client';
import { RootState } from '@/redux/store';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isArray } from 'lodash';
import { setFilter } from '@/redux/Feature/homeSlice';
const Sidebar = () => {
	const productsByCategory = useSelector(
		(state: RootState) => state?.product?.productsByCategory
	);
	const filter = useSelector((state: RootState) => state?.home?.filter);
	const dispatch = useDispatch();
	const category = isArray(productsByCategory)
		? productsByCategory?.map((data) => {
				return data?.category;
		  })
		: [];
	const handleSetCategory = useCallback((cat: string) => {
		dispatch(setFilter(cat));
	}, []);
	return (
		<div className='w-1/4 h-screen fixed  top-0 left-0 bg-gray-800 text-white p-4'>
			<h2 className='text-lg font-semibold mb-4'>Product Categories</h2>
			<ul className='space-y-2'>
				<li
					onClick={() => handleSetCategory('')}
					className={`hover:bg-gray-700 rounded p-2 cursor-pointer capitalize ${
						filter === '' ? 'bg-gray-700' : ' '
					}`}>
					All Item
				</li>
				{category.map((item, index) => (
					<li
						onClick={() => handleSetCategory(item)}
						key={index}
						className={`hover:bg-gray-700 rounded p-2 cursor-pointer capitalize ${
							filter === item ? 'bg-gray-700' : ' '
						}`}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(Sidebar);
