import * as React from 'react';

import { isMobile } from 'react-device-detect';
import Screen from '../../shared/UIElements/Screen/Screen';
import './ProductDatabaseScreen.css';

const ProductDatabaseScreen = () => {
	return (
		<Screen id="products" title="Products">
			<div>Content here</div>
		</Screen>
	);
};

export default ProductDatabaseScreen;
