import {useState} from 'react';
import {Switch} from 'antd';
import {selectPlanButtons} from '../data/planSelectButtons.jsx';
import TitleText from './ui/titleText.jsx';

const SelectPlan = ({
	planPrices,
	selectedPlan = 'arcade',
	setSelectedPlan,
	selectedPaymentPeriod,
	setSelectedPaymentPeriod,
}) => {
	const blue900 = '#1e3a8a';

	return (
		<>
			<TitleText title={'Select your plan'}>
            You have the option of monthly or yearly billing.
			</TitleText>

			{selectPlanButtons(setSelectedPlan, selectedPlan, selectedPaymentPeriod, planPrices)}

			<div className='flex gap-4 justify-center items-center'>
				<h4 className={`font-bold ${selectedPaymentPeriod === 'monthly'
					? 'text-blue-900'
					: 'text-gray-500'}`}
				>
                    Monthly
				</h4>
				<Switch
					checked={selectedPaymentPeriod === 'yearly'}
					onChange={(checked => setSelectedPaymentPeriod(checked ? 'yearly' : 'monthly'))}
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
