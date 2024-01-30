/** @format */

import { CategorizedProducts, Product } from '@/types';
import { toNumber } from 'lodash';

export const groupByCategory = (products: Product[]): CategorizedProducts[] => {
	const groupedProducts: { [key: string]: Product[] } = {};

	// Group products by category
	products.forEach((product) => {
		const { category } = product;
		if (groupedProducts[category]) {
			groupedProducts[category].push(product);
		} else {
			groupedProducts[category] = [product];
		}
	});

	// Convert the grouped products into the desired format
	const result: CategorizedProducts[] = Object.keys(groupedProducts).map(
		(category) => ({
			category,
			products: groupedProducts[category],
		})
	);

	return result;
};
export const formatCurrency = (number: string | number | undefined) => {
	try {
		// Convert the number to a numeric value
		const numericValue = toNumber(number);

		// Format with commas as thousands separators and two decimal places
		const formattedNumber = numericValue.toLocaleString('en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
		return formattedNumber;
	} catch (error) {
		return number;
	}
};
export const isEqualString = (val: string, search: string) => {
	return val.toLowerCase().includes(search);
};
