/** @format */

import React from 'react';
type Props = {
	show: boolean;
	children?: React.ReactElement | React.ReactElement[];
	setShow: (val: boolean) => any;
	modalStyle?: string;
	containerStyle?: string;
};
const Modal: React.FC<Props> = ({
	show,
	setShow,
	children,
	modalStyle = '',
	containerStyle = '',
}) => {
	const handleClose = () => {
		setShow(false);
	};

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center ${
				show ? 'opacity-100 visible' : 'opacity-0 invisible'
			} transition-opacity duration-300 ease-in-out ${modalStyle}`}>
			<div
				className='absolute inset-0 bg-gray-800 opacity-50'
				onClick={handleClose}></div>
			<div className={`bg-white p-2 rounded shadow-md z-10 ${containerStyle}`}>
				{children}
			</div>
		</div>
	);
};

export default React.memo(Modal);
