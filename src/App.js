import React from 'react';
import { isMobile } from 'react-device-detect';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutScreen from './components/Screens/AboutScreen/AboutScreen';
import DashboardScreen from './components/Screens/DashboardScreen/DashboardScreen';
import VirtualTerminalScreen from './components/Screens/VirtualTerminalScreen/VirtualTerminalScreen';
import InvoicingScreen from './components/Screens/InvoicingScreen/InvoicingScreen';
import CustomerDatabaseScreen from './components/Screens/CustomerDatabaseScreen/CustomerDatabaseScreen';
import ProductDatabaseScreen from './components/Screens/ProductDatabaseScreen/ProductDatabaseScreen';
import SchedulingScreen from './components/Screens/SchedulingScreen/SchedulingScreen';
import ContentContainer from './components/shared/UIElements/ContentContainer/ContentContainer';
import VerticalNavigation from './components/VerticalNavigation/VerticalNavigation';
import './App.css';
const App = () => {
	const Routes = () => (
		<Switch>
			<Route path="/" exact>
				<DashboardScreen />
			</Route>
			<Route path="/virtual-terminal" exact>
				<VirtualTerminalScreen />
			</Route>
			<Route path="/invoicing" exact>
				<InvoicingScreen />
			</Route>
			<Route path="/invoicing" exact>
				<InvoicingScreen />
			</Route>
			<Route path="/customers" exact>
				<CustomerDatabaseScreen />
			</Route>
			<Route path="/products" exact>
				<ProductDatabaseScreen />
			</Route>
			<Route path="/scheduling" exact>
				<SchedulingScreen />
			</Route>
			<Redirect to="/" />
		</Switch>
	);

	return (
		<Router>
			{!isMobile && <VerticalNavigation />}
			<Header />
			<div className="app-body-wrapper">
				<main>
					<ContentContainer>
						<Routes />
					</ContentContainer>
				</main>
			</div>
		</Router>
	);
};

export default App;
