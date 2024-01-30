/** @format */
import type { Metadata } from 'next';
import Head from 'next/head';

import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import ProviderTemplate from '@/redux/ProviderTemplate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SnapMart',
	description: 'Created By Jason Cabral',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Head>
				<title>SnapMart</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>

			<body className={inter.className}>
				<ProviderTemplate>{children}</ProviderTemplate>
			</body>
		</html>
	);
}
