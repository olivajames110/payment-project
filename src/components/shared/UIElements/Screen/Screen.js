import * as React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';

import './Screen.css';

const Screen = (props) => {
	return (
		<section id={`${props.id}-screen`} className="page-screen">
			<h1>{props.title}</h1>
			<ContentContainer>{props.children}</ContentContainer>
		</section>
	);
};

export default Screen;
