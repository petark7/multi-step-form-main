import SelectButton from '../components/ui/selectButton.jsx';
import arcadeIcon from '/assets/images/icon-arcade.svg';
import advancedIcon from '/assets/images/icon-advanced.svg';
import proIcon from '/assets/images/icon-pro.svg';

export const selectPlanButtons = (setSelectedPlan, selectedPlan, selectedPaymentPeriod) => ([
	<SelectButton
		id='arcade'
		key='arcade'
		setSelectedPlan={setSelectedPlan}
		selectedPlan={selectedPlan}
		icon={arcadeIcon}
		name={'Arcade'}
		price={'$9/mo'}
		yearlySelected={selectedPaymentPeriod === 'yearly'}
	/>,

	<SelectButton
		id='advanced'
		key='advanced'
		setSelectedPlan={setSelectedPlan}
		selectedPlan={selectedPlan}
		icon={advancedIcon}
		name={'Advanced'}
		price={'$12/mo'}
		yearlySelected={selectedPaymentPeriod === 'yearly'}
	/>,

	<SelectButton
		id='pro'
		key='pro'
		setSelectedPlan={setSelectedPlan}
		selectedPlan={selectedPlan}
		icon={proIcon}
		name={'Pro'}
		price={'$15/mo'}
		yearlySelected={selectedPaymentPeriod === 'yearly'}
	/>,
]
);
