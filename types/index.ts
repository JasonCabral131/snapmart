/** @format */

export interface Product {
	id: string;
	productName: string;
	description: string;
	unitPrice: number;
	imageUrl: string;
	category: string;
}
export interface CategorizedProducts {
	category: string;
	products: Product[];
}
