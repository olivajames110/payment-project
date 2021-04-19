import * as React from 'react';

import { isMobile } from 'react-device-detect';
import Screen from '../../shared/UIElements/Screen/Screen';
import './VirtualTerminalScreen.css';

const VirtualTerminalScreen = () => {
	return (
		<Screen id="store" title="Virtual Terminal">
			<div>Content here</div>
		</Screen>
	);
};

export default VirtualTerminalScreen;
