import SelectButton from '../components/ui/selectButton.jsx';
import arcadeIcon from '/assets/images/icon-arcade.svg';
import advancedIcon from '/assets/images/icon-advanced.svg';
import proIcon from '/assets/images/icon-pro.svg';

export const selectPlanButtons = (setSelectedPlan, selectedPlan, selectedPaymentPeriod, planPrices) => ([
	<SelectButton
		id='arcade'
		key='arcade'
		setSelectedPlan={setSelectedPlan}
		selectedPlan={selectedPlan}
		icon={arcadeIcon}
		name={'Arcade'}
		price={selectedPaymentPeriod === 'monthly' ? `$${planPrices.arcadeMonthly}/mo` : `$${planPrices.arcadeYearly}/yr`}
		yearlySelected={selectedPaymentPeriod === 'yearly'}
	/>,

	<SelectButton
		id='advanced'
		key='advanced'
		setSelectedPlan={setSelectedPlan}
		selectedPlan={selectedPlan}
		icon={advancedIcon}
		name={'Advanced'}
		price={selectedPaymentPeriod === 'monthly' ? `$${planPrices.advancedMonthly}/mo` : `$${planPrices.advancedYearly}/yr`}
		yearlySelected={selectedPaymentPeriod === 'yearly'}
	/>,

	<SelectButton
		id='pro'
		key='pro'
		setSelectedPlan={setSelectedPlan}
		selectedPlan={selectedPlan}
		icon={proIcon}
		name={'Pro'}
		price={selectedPaymentPeriod === 'monthly' ? `$${planPrices.proMonthly}/mo` : `$${planPrices.proYearly}/yr`}
		yearlySelected={selectedPaymentPeriod === 'yearly'}
	/>,
]
);
