import {useState} from 'react';
import {Switch} from 'antd';
import {selectPlanButtons} from '../data/planSelectButtons.jsx';
import TitleText from './ui/titleText.jsx';

const SelectPlan = () => {
	const [selectedPlan, setSelectedPlan] = useState('arcade');
	const [selectedPaymentPeriod, setSelectedPaymentPeriod] = useState('monthly');

	const blue900 = '#1e3a8a';
	const onPaymentPeriodSwitch = checked => {
		setSelectedPaymentPeriod(checked ? 'yearly' : 'monthly');
	};

	return (
		<>
			<TitleText title={'Select your plan'}>
            You have the option of monthly or yearly billing.
			</TitleText>

			{selectPlanButtons(setSelectedPlan, selectedPlan, selectedPaymentPeriod)}

			<div className='flex gap-4 justify-center items-center'>
				<h4 className={`font-bold ${selectedPaymentPeriod === 'monthly'
					? 'text-blue-900'
					: 'text-gray-500'}`}
				>
                    Monthly
				</h4>
				<Switch
					checked={selectedPaymentPeriod === 'yearly'}
					onChange={onPaymentPeriodSwitch}
					className='bg-blue-900'
					style={{backgroundColor: blue900}}
				/>
				<h4 className={`font-bold ${selectedPaymentPeriod === 'yearly'
					? 'text-blue-900'
					: 'text-gray-500'}`}
				>
                    Yearly
				</h4>
			</div>
		</>

	);
};

export default SelectPlan;
