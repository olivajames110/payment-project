import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';
import { isMobile } from 'react-device-detect';

const NavLinks = () => {
	return (
		<nav className="nav-links-container">
			<div id="nav-links__general-navigation">
				<ul id="dashboard">
					<li>
						<NavLink activeClassName="nav-link__active" to="/" exact>
							<div className="icon-wrapper">{dashboard}</div>
							<span>Dashboard </span>
						</NavLink>
					</li>
				</ul>
				<ul id="primary-links">
					<li>
						<NavLink activeClassName="nav-link__active" to="/virtual-terminal" exact>
							<div className="icon-wrapper">{creditCard}</div>
							<span> Virtual Terminal </span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="nav-link__active" to="/invoicing" exact>
							<div className="icon-wrapper">{invoicing}</div>
							<span> Invoicing </span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="nav-link__active" to="/customers" exact>
							<div className="icon-wrapper">{people}</div>
							<span> Customers </span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="nav-link__active" to="/products" exact>
							<div className="icon-wrapper">{shoppingCart}</div>
							<span> Products </span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="nav-link__active" to="/scheduling" exact>
							<div className="icon-wrapper">{calendar}</div>
							<span> Scheduling </span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavLinks;

const calendar = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
		<g id="Calendar">
			<path d="M57,8H52V6a4,4,0,0,0-8,0V8H36V6a4,4,0,0,0-8,0V8H20V6a4,4,0,0,0-8,0V8H7a5,5,0,0,0-5,5V53a5,5,0,0,0,5,5H35a1,1,0,0,0,0-2H7a3.009,3.009,0,0,1-3-3V22H60V39a1,1,0,0,0,2,0V13A5,5,0,0,0,57,8ZM46,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM30,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM14,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM60,20H4V13a3.009,3.009,0,0,1,3-3h5v2a4,4,0,0,0,8,0V10h8v2a4,4,0,0,0,8,0V10h8v2a4,4,0,0,0,8,0V10h5a3.009,3.009,0,0,1,3,3Z" />
			<path d="M30,29a2,2,0,0,0-2-2H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V29h4v3Z" />
			<path d="M18,29a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V29h4v3Z" />
			<path d="M52,34a2,2,0,0,0,2-2V29a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2Zm-4-5h4v3H48Z" />
			<path d="M30,38a2,2,0,0,0-2-2H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V38h4v3Z" />
			<path d="M18,38a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V38h4v3Z" />
			<path d="M28,45H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V47A2,2,0,0,0,28,45Zm-4,5V47h4v3Z" />
			<path d="M36,34h4a2,2,0,0,0,2-2V29a2,2,0,0,0-2-2H36a2,2,0,0,0-2,2v3A2,2,0,0,0,36,34Zm0-5h4v3H36Z" />
			<path d="M34,41a2,2,0,0,0,2,2,1,1,0,0,0,0-2V38h4a1,1,0,0,0,0-2H36a2,2,0,0,0-2,2Z" />
			<path d="M16,45H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V47A2,2,0,0,0,16,45Zm-4,5V47h4v3Z" />
			<path d="M49,36A13,13,0,1,0,62,49,13.015,13.015,0,0,0,49,36Zm0,24A11,11,0,1,1,60,49,11.013,11.013,0,0,1,49,60Z" />
			<path d="M54.778,44.808,47,52.586,43.465,49.05a1,1,0,0,0-1.414,1.414l4.242,4.243a1,1,0,0,0,1.414,0l8.485-8.485a1,1,0,0,0-1.414-1.414Z" />
		</g>
	</svg>
);

const creditCard = (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
		<g>
			<g>
				<path d="M458.667,85.333H53.333C23.936,85.333,0,109.269,0,138.667v234.667c0,29.397,23.936,53.333,53.333,53.333h405.333    c29.397,0,53.333-23.936,53.333-53.333V138.667C512,109.269,488.064,85.333,458.667,85.333z M490.667,373.333    c0,17.643-14.357,32-32,32H53.333c-17.643,0-32-14.357-32-32V138.667c0-17.643,14.357-32,32-32h405.333c17.643,0,32,14.357,32,32    V373.333z" />
			</g>
		</g>
		<g>
			<g>
				<path d="M501.333,149.333H10.667C4.779,149.333,0,154.112,0,160v64c0,5.888,4.779,10.667,10.667,10.667h490.667    c5.888,0,10.667-4.779,10.667-10.667v-64C512,154.112,507.221,149.333,501.333,149.333z M490.667,213.333H21.333v-42.667h469.333    V213.333z" />
			</g>
		</g>
		<g>
			<g>
				<path d="M202.667,298.667h-128c-5.888,0-10.667,4.779-10.667,10.667S68.779,320,74.667,320h128    c5.888,0,10.667-4.779,10.667-10.667S208.555,298.667,202.667,298.667z" />
			</g>
		</g>
		<g>
			<g>
				<path d="M202.667,341.333h-128C68.779,341.333,64,346.112,64,352c0,5.888,4.779,10.667,10.667,10.667h128    c5.888,0,10.667-4.779,10.667-10.667C213.333,346.112,208.555,341.333,202.667,341.333z" />
			</g>
		</g>
		<g>
			<g>
				<path d="M416,277.333h-21.333c-17.643,0-32,14.357-32,32v21.333c0,17.643,14.357,32,32,32H416c17.643,0,32-14.357,32-32v-21.333    C448,291.691,433.643,277.333,416,277.333z M426.667,330.667c0,5.888-4.779,10.667-10.667,10.667h-21.333    c-5.888,0-10.667-4.779-10.667-10.667v-21.333c0-5.888,4.779-10.667,10.667-10.667H416c5.888,0,10.667,4.779,10.667,10.667    V330.667z" />
			</g>
		</g>
	</svg>
);
const shoppingCart = (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 450.391 450.391">
		<g>
			<g>
				<g>
					<path d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02     c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465     c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122     C169.796,411.77,158.1,423.465,143.673,423.465z" />
					<path d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02     C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122     c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z" />
					<path d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42     C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004     c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453     c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449     H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988     c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228     c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z" />
				</g>
			</g>
		</g>
	</svg>
);

const people = (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 505.4 505.4">
		<g>
			<g>
				<path d="M437.1,233.45c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7c-31.9,0-57.7,25.8-57.7,57.7    c0,19.5,9.7,36.8,24.6,47.2c-12.7,4.4-24.3,11.2-34.1,20c-13.5-11.5-29.4-20.3-46.8-25.5c21.1-12.8,35.3-36.1,35.3-62.6    c0-40.4-32.7-73.1-73.1-73.1c-40.4,0-73.1,32.8-73.1,73.1c0,26.5,14.1,49.8,35.3,62.6c-17.2,5.2-32.9,13.9-46.3,25.2    c-9.8-8.6-21.2-15.3-33.7-19.6c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7s-57.7,25.8-57.7,57.7    c0,19.5,9.7,36.8,24.6,47.2C28.5,247.25,0,284.95,0,329.25v6.6c0,0.2,0.2,0.4,0.4,0.4h122.3c-0.7,5.5-1.1,11.2-1.1,16.9v6.8    c0,29.4,23.8,53.2,53.2,53.2h155c29.4,0,53.2-23.8,53.2-53.2v-6.8c0-5.7-0.4-11.4-1.1-16.9H505c0.2,0,0.4-0.2,0.4-0.4v-6.6    C505.2,284.85,476.8,247.15,437.1,233.45z M362.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7    c0,22.7-18.3,41.2-40.9,41.7c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C380.5,227.45,362.3,208.95,362.3,186.15z M194.9,165.35    c0-31.5,25.6-57.1,57.1-57.1s57.1,25.6,57.1,57.1c0,30.4-23.9,55.3-53.8,57c-1.1,0-2.2,0-3.3,0c-1.1,0-2.2,0-3.3,0    C218.8,220.65,194.9,195.75,194.9,165.35z M59.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7c0,22.7-18.3,41.2-40.9,41.7    c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C77.6,227.45,59.3,208.95,59.3,186.15z M125.5,320.15H16.2c4.5-42.6,40.5-76,84.2-76.3    c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c20.8,0.1,39.8,7.8,54.5,20.3C141.7,279.75,131,298.95,125.5,320.15z M366.8,359.95    c0,20.5-16.7,37.2-37.2,37.2h-155c-20.5,0-37.2-16.7-37.2-37.2v-6.8c0-62.1,49.6-112.9,111.3-114.7c1.1,0.1,2.3,0.1,3.4,0.1    s2.3,0,3.4-0.1c61.7,1.8,111.3,52.6,111.3,114.7V359.95z M378.7,320.15c-5.5-21.1-16-40-30.3-55.6c14.8-12.8,34-20.5,55-20.7    c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c43.7,0.3,79.7,33.7,84.2,76.3H378.7z" />
			</g>
		</g>
	</svg>
);

const invoicing = (
	<svg xmlns="http://www.w3.org/2000/svg" height="493pt" viewBox="0 -11 493.78 493">
		<path d="m378.351562 70.472656c.214844.015625.429688.03125.648438.03125.371094 0 .742188-.03125 1.105469-.082031 9.722656.199219 17.503906 8.128906 17.515625 17.851563 0 4.417968 3.582031 8 8 8 4.417968 0 8-3.582032 8-8-.019532-15.902344-11.089844-29.660157-26.621094-33.082032v-7.6875c0-4.417968-3.582031-8-8-8s-8 3.582032-8 8v8.050782c-16.421875 4.390624-27.046875 20.277343-24.832031 37.132812 2.214843 16.855469 16.582031 29.457031 33.582031 29.457031 9.871094 0 17.871094 8.003907 17.871094 17.875 0 9.867188-8 17.871094-17.871094 17.871094s-17.871094-8.003906-17.871094-17.871094c0-4.417969-3.582031-8-8-8-4.417968 0-8 3.582031-8 8 .019532 15.328125 10.316406 28.738281 25.121094 32.71875v8.765625c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-8.398437c16.894531-3.699219 28.289062-19.535157 26.425781-36.730469-1.859375-17.195312-16.378906-30.226562-33.675781-30.222656-9.597656.003906-17.484375-7.574219-17.863281-17.164063-.375-9.589843 6.894531-17.765625 16.464843-18.511719zm0 0" />
		<path d="m380.207031.390625c-49.214843 0-91.214843 32.113281-106.949219 75.113281h-198.558593c-4.398438 0-7.96875 3.964844-8 8.359375l-1.890625 280.640625h-56.597656c-4.417969 0-8.210938 3.199219-8.210938 7.625v35.613282c.101562 33.527343 26.507812 61.070312 60 62.585937v.175781h247v-.234375c2 .074219 2.824219.234375 4.089844.234375h.171875c34.664062-.054687 62.738281-28.171875 62.738281-62.835937v-180.0625c2 .109375 4.117188.167969 6.1875.167969 62.628906 0 113.59375-51.0625 113.59375-113.695313 0-62.628906-50.941406-113.6875-113.574219-113.6875zm-317.164062 454.113281h-.050781c-25.878907-.035156-46.875-20.960937-46.992188-46.84375v-27.15625h232v27.042969c.011719 16.695313 6.679688 32.699219 18.523438 44.46875.839843.839844 1.882812 1.488281 2.761718 2.488281zm294.957031-46.84375c.003906 25.835938-20.914062 46.792969-46.746094 46.84375h-.152344c-25.9375-.046875-46.972656-21.015625-47.101562-46.949218v-35.425782c.066406-2.046875-.714844-4.027344-2.164062-5.472656-1.449219-1.445312-3.429688-2.222656-5.472657-2.152344h-175.554687l1.835937-273h186.171875c-1.417968 7.324219-2.152344 14.761719-2.191406 22.21875-.015625 15.769532 3.273438 31.363282 9.65625 45.78125h-75.5625c-4.421875 0-8 3.582032-8 8 0 4.417969 3.578125 8 8 8h84.242188c16.503906 25.953125 42.886718 44.046875 73.039062 50.101563zm22.207031-195.882812c-53.890625 0-97.582031-43.6875-97.578125-97.582032 0-53.894531 43.6875-97.582031 97.582032-97.582031 53.890624 0 97.578124 43.691407 97.578124 97.582031-.058593 53.867188-43.710937 97.523438-97.582031 97.582032zm0 0" />
		<path d="m149.367188 212.746094c-14.121094 0-25.605469 11.121094-25.605469 24.792968 0 13.671876 11.484375 24.792969 25.605469 24.792969 14.121093 0 25.609374-11.121093 25.609374-24.792969 0-13.671874-11.488281-24.792968-25.609374-24.792968zm0 33.585937c-5.300782 0-9.605469-3.945312-9.605469-8.792969 0-4.851562 4.308593-8.792968 9.605469-8.792968 5.296874 0 9.609374 3.945312 9.609374 8.792968 0 4.847657-4.3125 8.792969-9.609374 8.792969zm0 0" />
		<path d="m192.71875 237.503906c0 4.417969 3.578125 8 8 8h106.65625c4.417969 0 8-3.582031 8-8 0-4.417968-3.582031-8-8-8h-106.65625c-4.421875 0-8 3.582032-8 8zm0 0" />
		<path d="m149.367188 143.203125c-14.121094 0-25.605469 11.125-25.605469 24.796875s11.484375 24.792969 25.605469 24.792969c14.121093 0 25.609374-11.121094 25.609374-24.792969s-11.488281-24.796875-25.609374-24.796875zm0 33.589844c-5.300782 0-9.605469-3.945313-9.605469-8.792969s4.308593-8.796875 9.605469-8.796875c5.296874 0 9.609374 3.945313 9.609374 8.796875 0 4.847656-4.3125 8.796875-9.609374 8.796875zm0 0" />
		<path d="m149.367188 282.28125c-14.121094 0-25.605469 11.121094-25.605469 24.792969s11.484375 24.792969 25.605469 24.792969c14.121093 0 25.609374-11.121094 25.609374-24.792969s-11.488281-24.792969-25.609374-24.792969zm0 33.585938c-5.300782 0-9.605469-3.941407-9.605469-8.792969 0-4.847657 4.308593-8.792969 9.605469-8.792969 5.296874 0 9.609374 3.945312 9.609374 8.792969 0 4.847656-4.3125 8.792969-9.609374 8.792969zm0 0" />
		<path d="m307.375 299.503906h-106.65625c-4.421875 0-8 3.582032-8 8 0 4.417969 3.578125 8 8 8h106.65625c4.417969 0 8-3.582031 8-8 0-4.417968-3.582031-8-8-8zm0 0" />
	</svg>
);

const dashboard = (
	<svg xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 -24 512 512">
		<path d="m256.238281 360c-4.421875 0-8.039062-3.574219-8.039062-8s3.535156-8 7.953125-8h.085937c4.417969 0 8 3.574219 8 8s-3.582031 8-8 8zm0 0" />
		<path d="m504 344h-495.625c-4.421875 0-8-3.574219-8-8s3.578125-8 8-8h495.625c4.425781 0 8 3.574219 8 8s-3.574219 8-8 8zm0 0" />
		<path d="m488 376h-464c-13.230469 0-24-10.769531-24-24v-328c0-13.230469 10.769531-24 24-24h464c13.230469 0 24 10.769531 24 24v328c0 13.230469-10.769531 24-24 24zm-464-360c-4.414062 0-8 3.59375-8 8v328c0 4.414062 3.585938 8 8 8h464c4.414062 0 8-3.585938 8-8v-328c0-4.40625-3.585938-8-8-8zm0 0" />
		<path d="m184.007812 440c-.640624 0-1.296874-.078125-1.945312-.238281-4.285156-1.074219-6.894531-5.417969-5.824219-9.699219l16-64c1.066407-4.292969 5.410157-6.902344 9.699219-5.824219 4.285156 1.074219 6.894531 5.417969 5.824219 9.699219l-16 64c-.914063 3.636719-4.167969 6.0625-7.753907 6.0625zm0 0" />
		<path d="m327.992188 440c-3.585938 0-6.839844-2.425781-7.753907-6.0625l-16-64c-1.078125-4.28125 1.53125-8.625 5.824219-9.699219 4.265625-1.078125 8.625 1.523438 9.699219 5.824219l16 64c1.078125 4.28125-1.53125 8.625-5.824219 9.699219-.648438.160156-1.304688.238281-1.945312.238281zm0 0" />
		<path d="m152 456c-4.425781 0-8-3.574219-8-8 0-13.230469 10.769531-24 24-24 4.425781 0 8 3.574219 8 8s-3.574219 8-8 8c-4.414062 0-8 3.585938-8 8 0 4.425781-3.574219 8-8 8zm0 0" />
		<path d="m360 456c-4.425781 0-8-3.574219-8-8 0-4.414062-3.585938-8-8-8-4.425781 0-8-3.574219-8-8s3.574219-8 8-8c13.230469 0 24 10.769531 24 24 0 4.425781-3.574219 8-8 8zm0 0" />
		<path d="m344 440h-176c-4.425781 0-8-3.574219-8-8s3.574219-8 8-8h176c4.425781 0 8 3.574219 8 8s-3.574219 8-8 8zm0 0" />
		<path d="m152 464c-4.425781 0-8-3.574219-8-8v-8c0-4.425781 3.574219-8 8-8s8 3.574219 8 8v8c0 4.425781-3.574219 8-8 8zm0 0" />
		<path d="m360 464h-208c-4.425781 0-8-3.574219-8-8s3.574219-8 8-8h208c4.425781 0 8 3.574219 8 8s-3.574219 8-8 8zm0 0" />
		<path d="m360 464c-4.425781 0-8-3.574219-8-8v-8c0-4.425781 3.574219-8 8-8s8 3.574219 8 8v8c0 4.425781-3.574219 8-8 8zm0 0" />
		<path d="m448.015625 232h-160c-4.421875 0-8-3.585938-8-8s3.578125-8 8-8h160c4.425781 0 8 3.585938 8 8s-3.574219 8-8 8zm0 0" />
		<path d="m288.015625 232c-4.421875 0-8-3.585938-8-8v-160c0-4.414062 3.578125-8 8-8 4.425781 0 8 3.585938 8 8v160c0 4.414062-3.574219 8-8 8zm0 0" />
		<path d="m319.984375 232c-4.425781 0-8-3.585938-8-8v-56c0-4.414062 3.574219-8 8-8 4.421875 0 8 3.585938 8 8v56c0 4.414062-3.578125 8-8 8zm0 0" />
		<path d="m352.015625 232c-4.421875 0-8-3.585938-8-8v-104c0-4.414062 3.578125-8 8-8 4.425781 0 8 3.585938 8 8v104c0 4.414062-3.574219 8-8 8zm0 0" />
		<path d="m415.984375 232c-4.425781 0-8-3.585938-8-8v-80c0-4.414062 3.574219-8 8-8 4.421875 0 8 3.585938 8 8v80c0 4.414062-3.578125 8-8 8zm0 0" />
		<path d="m383.984375 232c-4.425781 0-8-3.585938-8-8v-40c0-4.414062 3.574219-8 8-8 4.421875 0 8 3.585938 8 8v40c0 4.414062-3.578125 8-8 8zm0 0" />
		<path d="m143.984375 232c-48.519531 0-88-39.480469-88-88s39.480469-88 88-88 88 39.480469 88 88-39.480469 88-88 88zm0-160c-39.703125 0-72 32.304688-72 72s32.296875 72 72 72 72-32.304688 72-72-32.296875-72-72-72zm0 0" />
		<path d="m143.984375 168c-13.230469 0-24-10.769531-24-24s10.769531-24 24-24 24 10.769531 24 24-10.769531 24-24 24zm0-32c-4.417969 0-8 3.59375-8 8s3.582031 8 8 8c4.414063 0 8-3.59375 8-8s-3.585937-8-8-8zm0 0" />
		<path d="m143.984375 136c-4.425781 0-8-3.585938-8-8v-64c0-4.414062 3.574219-8 8-8 4.421875 0 8 3.585938 8 8v64c0 4.414062-3.578125 8-8 8zm0 0" />
		<path d="m87.425781 208.558594c-2.050781 0-4.097656-.78125-5.65625-2.34375-3.128906-3.125-3.128906-8.183594 0-11.3125l45.246094-45.246094c3.128906-3.128906 8.183594-3.128906 11.3125 0s3.128906 8.183594 0 11.3125l-45.25 45.246094c-1.566406 1.570312-3.605469 2.34375-5.652344 2.34375zm0 0" />
		<path d="m447.984375 264h-159.96875c-4.421875 0-8-3.574219-8-8s3.578125-8 8-8h159.96875c4.421875 0 8 3.574219 8 8s-3.578125 8-8 8zm0 0" />
		<path d="m399.984375 288h-64c-4.425781 0-8-3.574219-8-8s3.574219-8 8-8h64c4.421875 0 8 3.574219 8 8s-3.578125 8-8 8zm0 0" />
		<path d="m223.96875 264h-151.96875c-4.425781 0-8-3.574219-8-8s3.574219-8 8-8h151.96875c4.421875 0 8 3.574219 8 8s-3.578125 8-8 8zm0 0" />
		<path d="m183.96875 288h-64c-4.425781 0-8-3.574219-8-8s3.574219-8 8-8h64c4.421875 0 8 3.574219 8 8s-3.578125 8-8 8zm0 0" />
	</svg>
);

const bellIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
		data-prefix="far"
		data-icon="bell"
		className="svg-inline--fa fa-bell fa-w-14"
		role="img"
		viewBox="0 0 448 512"
	>
		<path
			fill="currentColor"
			d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"
		/>
	</svg>
);

const profile = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="user-alt"
		className="svg-inline--fa fa-user-alt fa-w-16"
		role="img"
		viewBox="0 0 512 512"
	>
		<path
			fill="currentColor"
			d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
		/>
	</svg>
);

const logoutIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="sign-out-alt"
		className="svg-inline--fa fa-sign-out-alt fa-w-16"
		role="img"
		viewBox="0 0 512 512"
	>
		<path
			fill="currentColor"
			d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
		/>
	</svg>
);