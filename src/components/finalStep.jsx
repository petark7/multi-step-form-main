import {camelCaseToCapitalizedCase} from '../utils.js';
import TitleText from './ui/titleText.jsx';

const FinalStep = ({state, setActiveButtonid}) => {
	const {selectedPlan, selectedPaymentPeriod, selectedAddons, planPrices, addonPrices} = state;

	// Calculate the price of the selected plan
	const planPriceKey = `${selectedPlan}${selectedPaymentPeriod.charAt(0).toUpperCase() + selectedPaymentPeriod.slice(1)}`;
	const planPrice = planPrices[planPriceKey];

	// Calculate the total price of the selected add-ons
	let addonsPrice = 0;
	for (const addon of selectedAddons) {
		addonsPrice += addonPrices[`${addon}Price`];
	}

	// Calculate the total price
	const totalPrice = planPrice + addonsPrice;

	return (
		<div className='flex flex-col gap-5'>
			<TitleText title={'Finishing up'}>
                Double-check everything looks OK before confirming.
			</TitleText>

			<div className='flex flex-col gap-5 bg-slate-50 rounded-xl p-4 text-xl'>
				<div className='flex justify-between items-center'>
					<div>
						<div className='text-blue-900 font-bold capitalize'>{state.selectedPlan} ({state.selectedPaymentPeriod})</div>
						<div onClick={() => {
							setActiveButtonid(2);
						}} className='text-gray-400 underline hover:cursor-pointer'>Change</div>
					</div>
					<div className='text-blue-900 font-bold'>${planPrice}/yr</div>
				</div>

				<hr className='h-[2px] w-full bg-gray-100 border-0 rounded'/>

				{state.selectedAddons.map(addon => (
					<div key={addon} className='flex justify-between items-center'>
						<div className='text-gray-400'>{camelCaseToCapitalizedCase(addon)}</div>
						<div className='text-blue-900 font-semibold'>+${addonPrices[`${addon}Price`]}/yr</div>
					</div>
				))}
			</div>

			<div className='flex justify-between items-center mx-5'>
				<div className='text-gray-400 text-xl'>Total (per year)</div>
				<div className={'text-purplishBlue text-2xl font-bold'}>${totalPrice}/yr</div>
			</div>
		</div>
	);
};

export default FinalStep;
