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
		addonsSelected: [],
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
			onlineService: 1,
			largerStorage: 2,
			customizableProfile: 2,
		},
	});

	const setSelectedPlan = plan => {
		setAppState(previousState => ({...previousState, selectedPlan: plan}));
	};

	const setSelectedPaymentPeriod = period => {
		setAppState(previousState => ({...previousState, selectedPaymentPeriod: period}));
	};

	console.log('selected plan', appState.selectedPlan, appState.selectedPaymentPeriod);
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
						setSelectedPaymentPeriod={setSelectedPaymentPeriod}/>
				</ConfigProvider>
			</div>
		</div>
	);
}

export default App;
