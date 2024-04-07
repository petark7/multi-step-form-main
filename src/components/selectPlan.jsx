import {useEffect, useState} from 'react';
import {Switch} from 'antd';
import arcadeIcon from '../../assets/images/icon-arcade.svg';
import advancedIcon from '../../assets/images/icon-advanced.svg';
import proIcon from '../../assets/images/icon-pro.svg';
import TitleText from './ui/titleText.jsx';
import SelectButton from './ui/selectButton.jsx';

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

			<SelectButton
				id='arcade'
				setSelectedPlan={setSelectedPlan}
				selectedPlan={selectedPlan}
				icon={arcadeIcon}
				name={'Arcade'}
				price={'$9/mo'}
			/>

			<SelectButton
				id='advanced'
				setSelectedPlan={setSelectedPlan}
				selectedPlan={selectedPlan}
				icon={advancedIcon}
				name={'Advanced'}
				price={'$12/mo'}
			/>

			<SelectButton
				id='pro'
				setSelectedPlan={setSelectedPlan}
				selectedPlan={selectedPlan}
				icon={proIcon}
				name={'Pro'}
				price={'$15/mo'}
			/>

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
