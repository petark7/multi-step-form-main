import {useState} from 'react';
import {Button} from 'antd';
import {buttonList} from '../data/buttonList.jsx';
import PersonalInfo from './personalInfo.jsx';
import FormContent from './ui/formContent.jsx';
import SelectPlan from './selectPlan.jsx';
import SelectAddOns from './selectAddOns.jsx';
import FinalStep from './finalStep.jsx';

const FormComponent = ({
	state,
	selectedPlan,
	setSelectedPlan,
	selectedPaymentPeriod,
	setSelectedPaymentPeriod,
	selectedAddons,
	addSelectedAddon,
}) => {
	const [activeButtonid, setActiveButtonid] = useState(1);

	return (
		<div className='h-screen flex flex-col items-center justify-between'>
			<div className='flex gap-3 text-white mt-10'>
				{buttonList(activeButtonid, setActiveButtonid)}
			</div>

			<FormContent stylingClass='flex flex-col gap-4 mx-6'>
				{activeButtonid === 1 && <PersonalInfo userState={state.userData} />}

				{activeButtonid === 2 && <SelectPlan
					planPrices={state.planPrices}
					setSelectedPlan={setSelectedPlan}
					selectedPlan={selectedPlan}
					setSelectedPaymentPeriod={setSelectedPaymentPeriod}
					selectedPaymentPeriod={selectedPaymentPeriod}/>}

				{activeButtonid === 3 && <SelectAddOns
					addonPrices={state.addonPrices}
					selectedAddons={selectedAddons}
					addSelectedAddon={addSelectedAddon}
				/>}

				{activeButtonid === 4 && <FinalStep state={state}/>}
			</FormContent>

			<div className='w-full flex items-center justify-between bg-white h-[100px] p-5'>
				<h3
					className='text-gray-400 font-semibold text-xl hover:cursor-pointer'
					onClick={() => {
						if (activeButtonid > 1) {
							setActiveButtonid(previousID => previousID - 1);
						}
					}}
				>
					Go Back
				</h3>

				<Button
					className='bg-blue-900 text-white text-xl font-semibold
					hover:bg-blue-400 h-[60px] w-[130px]'
					size='large'
					onClick={() => {
						if (activeButtonid < 4) {
							setActiveButtonid(previousID => previousID + 1);
						}
					}}
				>
					Next Step
				</Button>
			</div>

		</div>
	);
};

export default FormComponent;
