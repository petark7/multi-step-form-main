/* eslint-disable import/no-absolute-path */
import {useState} from 'react';
import {ConfigProvider} from 'antd';
import FormComponent from './components/form.jsx';
import {DEEP_BLUE} from './constants/colors.jsx';
import mobileImage from '/assets/images/bg-sidebar-mobile.svg';
import './App.css';

function App() {
	const [appState, setAppState] = useState({
		userData: [],
		selectedPlan: '',
		selectedAddons: [],
		selectedPaymentPeriod: 'monthly',
		planPrices: {
			arcadeMonthly: 9,
			advancedMonthly: 12,
			proMonthly: 15,
			arcadeYearly: 90,
			advancedYearly: 120,
			proYearly: 150,
		},
		addonPrices: {
			onlineServicePrice: 1,
			largerStoragePrice: 2,
			customizableProfilePrice: 2,
		},
	});

	const setSelectedPlan = plan => {
		setAppState(previousState => ({...previousState, selectedPlan: plan}));
	};

	const setSelectedPaymentPeriod = period => {
		setAppState(previousState => ({...previousState, selectedPaymentPeriod: period}));
	};

	const addSelectedAddon = addon => {
		setAppState(previousState => {
			const addons = [...previousState.selectedAddons];
			const index = addons.indexOf(addon);
			if (index === -1) {
				addons.push(addon); // Add addon if not already present
			} else {
				addons.splice(index, 1); // Remove addon if already present
			}

			return {...previousState, selectedAddons: addons};
		});
	};

	return (
		<div className='relative w-[800px]'>
			<div className='absolute top-0 left-0 w-full h-[150px] z-0' style={{backgroundImage: `url(${mobileImage})`, backgroundSize: 'cover'}}></div>
			<div className='relative z-10'>
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: DEEP_BLUE,
						},
					}}
				>
					<FormComponent
						state={appState}
						selectedPlan={appState.selectedPlan}
						setSelectedPlan={setSelectedPlan}
						selectedPaymentPeriod={appState.selectedPaymentPeriod}
						setSelectedPaymentPeriod={setSelectedPaymentPeriod}
						selectedAddons={appState.selectedAddons}
						addSelectedAddon={addSelectedAddon}/>
				</ConfigProvider>
			</div>
		</div>
	);
}

export default App;
