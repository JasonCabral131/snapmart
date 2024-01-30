/** @format */
'use client';

import Cart from '@/components/Cart';
import Products from '@/components/Products';
import Sidebar from '@/components/Sidebar';

export default function Home() {
	return (
		<div className='w-full'>
			<div className='flex justify-center items-center relative'>
				<Sidebar />

				<Products />

				<Cart />
			</div>
		</div>
	);
}
