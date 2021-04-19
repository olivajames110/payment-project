import * as React from 'react';
import { NavLink } from 'react-router-dom';

import NavLinks from '../Header/NavLinks/NavLinks';
import './VerticalNavigation.css';
const VerticalNavigation: React.FC = () => {
	// testing const [modalIsActive, 		setModalIsActive] = React.useState < boolean
	// > (false);

	return (
		<aside id="vertical-navigation">
			<section id="logo">{logo}</section>
			<NavLinks />
		</aside>
	);
};

export default VerticalNavigation;

const logo = (
	<svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.93 23.49">
		<g id="text">
			<path
				d="M255.66,194.88a5.61,5.61,0,0,0,1.24.5,3.7,3.7,0,0,0,.8.11,1,1,0,0,0,.66-.18.67.67,0,0,0,.21-.52.68.68,0,0,0-.18-.48,2,2,0,0,0-.66-.41,14.81,14.81,0,0,0-1.42-.52,9.72,9.72,0,0,1-1.48-.64,2.93,2.93,0,0,1-1.57-2.79,2.68,2.68,0,0,1,.54-1.7,3.42,3.42,0,0,1,1.48-1.06,6.07,6.07,0,0,1,2.18-.36,7.81,7.81,0,0,1,1.8.2,10.18,10.18,0,0,1,1.59.51,15.71,15.71,0,0,1,1.48.74l-1.2,2.71a6.4,6.4,0,0,0-1.68-1.07,4,4,0,0,0-1.63-.41,1,1,0,0,0-.65.16.51.51,0,0,0-.2.4.63.63,0,0,0,.28.53,3.62,3.62,0,0,0,.85.39c.37.12.85.29,1.43.51a13.37,13.37,0,0,1,1.52.69,3.49,3.49,0,0,1,1.12,1,2.75,2.75,0,0,1,.44,1.62,3.25,3.25,0,0,1-1.09,2.7,4.91,4.91,0,0,1-3.12.87,10.57,10.57,0,0,1-2.22-.23,10.26,10.26,0,0,1-2-.66,15,15,0,0,1-1.76-1l1.48-2.77A11.93,11.93,0,0,0,255.66,194.88Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M264.8,181.61a2.55,2.55,0,0,1,3.24,0,2,2,0,0,1,.67,1.53,1.89,1.89,0,0,1-.67,1.5,2.52,2.52,0,0,1-3.24,0,1.92,1.92,0,0,1-.67-1.5A2,2,0,0,1,264.8,181.61Zm3.56,5.45v10.81h-3.9V187.06Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M288,197.87h-4.07v-6.58a2.57,2.57,0,0,0-.27-1.3,1,1,0,0,0-.9-.46,1.22,1.22,0,0,0-.68.19,1.12,1.12,0,0,0-.47.57,2.57,2.57,0,0,0-.17,1v6.58h-4.06v-6.58a2.57,2.57,0,0,0-.27-1.3,1,1,0,0,0-.9-.46,1.28,1.28,0,0,0-.69.19,1.17,1.17,0,0,0-.47.57,2.79,2.79,0,0,0-.16,1v6.58H271V187.06h3.87v1.62a3.55,3.55,0,0,1,1.23-1.37,3.5,3.5,0,0,1,1.94-.5,3.94,3.94,0,0,1,2,.43,2.49,2.49,0,0,1,1.06,1.28,4.42,4.42,0,0,1,1.49-1.26,4.31,4.31,0,0,1,2-.45,3.72,3.72,0,0,1,2.05.48,2.59,2.59,0,0,1,1,1.38,7,7,0,0,1,.31,2.2Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M290.53,203v-16h4.06v16Zm12.08-7.35a5.07,5.07,0,0,1-1.89,1.95,4.81,4.81,0,0,1-2.44.66,4.08,4.08,0,0,1-2.45-.73,4.42,4.42,0,0,1-1.55-2,9.1,9.1,0,0,1,0-6.12,4.45,4.45,0,0,1,1.55-2,4.08,4.08,0,0,1,2.45-.73,4.81,4.81,0,0,1,2.44.66,5,5,0,0,1,1.89,1.94,7.38,7.38,0,0,1,0,6.44Zm-3.84-4.45a1.94,1.94,0,0,0-.82-.76,2.56,2.56,0,0,0-1.15-.26,2.25,2.25,0,0,0-1,.25,2.06,2.06,0,0,0-.84.74,2.59,2.59,0,0,0,0,2.53,2.06,2.06,0,0,0,.84.74,2.25,2.25,0,0,0,1,.25,2.56,2.56,0,0,0,1.15-.26,1.9,1.9,0,0,0,.82-.77,2.34,2.34,0,0,0,.31-1.23A2.29,2.29,0,0,0,298.77,191.23Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M309.44,179.55v18.32h-4.07V179.55Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M314.43,197.41a5,5,0,0,1-2.22-1.95,5.59,5.59,0,0,1-.78-3,5.77,5.77,0,0,1,.75-3,5,5,0,0,1,2.17-1.94,8.87,8.87,0,0,1,6.69,0,4.59,4.59,0,0,1,2,1.85,5.78,5.78,0,0,1,.71,3c0,.18,0,.37,0,.55s0,.34,0,.48H313.66v-2.09H320l-.87,1.08a2.35,2.35,0,0,0,.21-.42,1.17,1.17,0,0,0,.09-.4,2.54,2.54,0,0,0-.22-1.12,1.65,1.65,0,0,0-.63-.7,1.83,1.83,0,0,0-1-.25,2,2,0,0,0-1.17.33,2,2,0,0,0-.71,1,5.41,5.41,0,0,0-.23,1.7,3.81,3.81,0,0,0,.23,1.55,2.22,2.22,0,0,0,.76,1,2.14,2.14,0,0,0,1.22.34,3.3,3.3,0,0,0,1.51-.32,2.31,2.31,0,0,0,1-.93l3.66.73a5.87,5.87,0,0,1-2.36,2.49,7.43,7.43,0,0,1-3.65.82A7.91,7.91,0,0,1,314.43,197.41Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M328.26,194.63a4.68,4.68,0,0,0,1.4,1.17,3.61,3.61,0,0,0,1.76.42,3,3,0,0,0,2.11-.73,2.39,2.39,0,0,0,.8-1.85,2.73,2.73,0,0,0-.52-1.76,3.71,3.71,0,0,0-1.35-1.07,15.94,15.94,0,0,0-1.77-.74c-.41-.14-.86-.33-1.36-.55a7.29,7.29,0,0,1-1.43-.87,4.25,4.25,0,0,1-1.12-1.3,3.88,3.88,0,0,1-.43-1.91,4,4,0,0,1,.61-2.18,4.23,4.23,0,0,1,1.69-1.52,5.43,5.43,0,0,1,2.46-.55,5.08,5.08,0,0,1,2.34.51,5.47,5.47,0,0,1,1.7,1.29,6.83,6.83,0,0,1,1.11,1.65l-1.72,1a6.57,6.57,0,0,0-.77-1.2,4.05,4.05,0,0,0-1.14-1,3.3,3.3,0,0,0-1.63-.38,2.56,2.56,0,0,0-1.95.65,2,2,0,0,0-.61,1.44,2.3,2.3,0,0,0,.35,1.26,3.39,3.39,0,0,0,1.18,1.08,12.22,12.22,0,0,0,2.27,1,12.32,12.32,0,0,1,1.39.61,6.47,6.47,0,0,1,1.35,1,5,5,0,0,1,1,1.39,4.4,4.4,0,0,1,.4,1.93,4.57,4.57,0,0,1-.41,1.95,4.36,4.36,0,0,1-1.13,1.48,5.25,5.25,0,0,1-1.62.94,5.64,5.64,0,0,1-4.37-.24,7.1,7.1,0,0,1-2-1.53,9,9,0,0,1-1.39-2l1.59-1.08A12.59,12.59,0,0,0,328.26,194.63Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M339.69,187.06l2.7,7,2.93-7.85,3.15,7.89,2.72-7.07h2.12l-4.7,11.63-3.27-7.87-3.07,7.87-4.7-11.63Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M355.57,181.69a1.27,1.27,0,0,1,.91-.38,1.3,1.3,0,0,1,1.29,1.29,1.27,1.27,0,0,1-.38.91,1.24,1.24,0,0,1-.91.38,1.27,1.27,0,0,1-.91-.38,1.23,1.23,0,0,1-.38-.91A1.2,1.2,0,0,1,355.57,181.69Zm1.85,5.37v10.81h-1.88V187.06Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M361.17,203v-16h1.88v16Zm10.2-7.56a5,5,0,0,1-1.94,1.95,5.43,5.43,0,0,1-2.69.68,4.19,4.19,0,0,1-2.36-.68,4.52,4.52,0,0,1-1.6-1.95,8.23,8.23,0,0,1,0-6,4.55,4.55,0,0,1,1.6-1.94,4.19,4.19,0,0,1,2.36-.68,5.43,5.43,0,0,1,2.69.68,5.09,5.09,0,0,1,1.94,1.94,6.65,6.65,0,0,1,0,6Zm-1.68-5.12a3.37,3.37,0,0,0-1.34-1.31,3.83,3.83,0,0,0-1.84-.45,3.32,3.32,0,0,0-1.63.45,3.43,3.43,0,0,0-1.31,1.31,4.56,4.56,0,0,0,0,4.23,3.43,3.43,0,0,0,1.31,1.31,3.32,3.32,0,0,0,1.63.45,3.83,3.83,0,0,0,1.84-.45,3.37,3.37,0,0,0,1.34-1.31,4.72,4.72,0,0,0,0-4.23Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
			<path
				d="M376.19,197.39a5,5,0,0,1-1.81-2,6.37,6.37,0,0,1-.64-2.94,6.17,6.17,0,0,1,.67-3,4.79,4.79,0,0,1,1.88-2,5.44,5.44,0,0,1,2.8-.7,5.28,5.28,0,0,1,2.74.67,4.39,4.39,0,0,1,1.75,1.91,6.63,6.63,0,0,1,.61,3c0,.11,0,.22,0,.34s0,.19,0,.22h-9.23v-1.59h7.75l-.75,1.08a2.26,2.26,0,0,0,.14-.37,1.85,1.85,0,0,0,.07-.41,3.37,3.37,0,0,0-.39-1.66,2.93,2.93,0,0,0-1.07-1.11,3.16,3.16,0,0,0-1.6-.4,3.47,3.47,0,0,0-1.84.46,3,3,0,0,0-1.17,1.32,5,5,0,0,0-.44,2.1,5.24,5.24,0,0,0,.4,2.16,3,3,0,0,0,1.17,1.36,3.62,3.62,0,0,0,1.88.47,3.86,3.86,0,0,0,2-.48,4,4,0,0,0,1.44-1.47l1.52,1a5.64,5.64,0,0,1-2.12,2.06,6.29,6.29,0,0,1-3,.69A5.07,5.07,0,0,1,376.19,197.39Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#191f36' }}
			/>
		</g>
		<g id="card">
			<path
				d="M246.3,185v.74h-33V185a3,3,0,0,1,3-3h27.08A3,3,0,0,1,246.3,185Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#4f566b' }}
			/>
			<path
				d="M213.26,188.59v8.87a3,3,0,0,0,3,3h27.08a3,3,0,0,0,3-3v-8.87Zm5.88,8.53h-3.62v-1.45h3.62Zm5.12,0h-3.63v-1.45h3.63Z"
				transform="translate(-213.26 -179.55)"
				style={{ fill: '#4f566b' }}
			/>
		</g>
	</svg>
);
