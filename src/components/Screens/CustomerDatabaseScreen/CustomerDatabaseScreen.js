import * as React from 'react';

import { isMobile } from 'react-device-detect';
import Screen from '../../shared/UIElements/Screen/Screen';
import './CustomerDatabaseScreen.css';

const CustomerDatabaseScreen = () => {
	return (
		<Screen id="invoicing" title="Customers">
			<div>Content here</div>
		</Screen>
	);
};

export default CustomerDatabaseScreen;
