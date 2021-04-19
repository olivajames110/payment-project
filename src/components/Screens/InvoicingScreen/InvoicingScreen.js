import * as React from 'react';

import { isMobile } from 'react-device-detect';
import Screen from '../../shared/UIElements/Screen/Screen';
import './InvoicingScreen.css';

const InvoicingScreen = () => {
	return (
		<Screen id="invoicing" title="Invoicing">
			<div>Content here</div>
		</Screen>
	);
};

export default InvoicingScreen;
