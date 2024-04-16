import {useEffect, useState} from 'react';
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
	toggleSelectedAddon,
	userData,
	setUserData,
}) => {
	const [activeButtonid, setActiveButtonid] = useState(1);

	const handleNextStep = () => {
		if (activeButtonid < 4) {
			setActiveButtonid(previousId => previousId + 1);
		}

		handleFinish();
	};

	const handleFinish = () => {
		if (activeButtonid === 4) {
			// Perform final steps here
			alert(JSON.stringify(state));
		}
	};

	const handleFormChange = (fieldName, value) => {
		const newUserData = {
			...userData,
			[fieldName]: value,
		};
		setUserData(newUserData);
	};

	const isPersonalInfoValid = () => Boolean(userData?.name) && Boolean(userData?.emailAddress) && Boolean(userData?.phoneNumber);

	return (
		<div className='h-screen flex flex-col items-center justify-between'>
			<div className='flex gap-3 text-white mt-10'>
				{buttonList(activeButtonid, setActiveButtonid)}
			</div>

			<FormContent stylingClass='flex flex-col gap-4 mx-6'>
				{activeButtonid === 1 && <PersonalInfo
					userData={userData}
					onFormChange={handleFormChange}
				/>}

				{activeButtonid === 2 && <SelectPlan
					planPrices={state.planPrices}
					setSelectedPlan={setSelectedPlan}
					selectedPlan={selectedPlan}
					setSelectedPaymentPeriod={setSelectedPaymentPeriod}
					selectedPaymentPeriod={selectedPaymentPeriod}/>}

				{activeButtonid === 3 && <SelectAddOns
					addonPrices={state.addonPrices}
					selectedAddons={selectedAddons}
					toggleSelectedAddon={toggleSelectedAddon}
				/>}

				{activeButtonid === 4 && <FinalStep state={state}/>}
			</FormContent>

			<div className='w-full flex items-center justify-between bg-white h-[100px] p-5'>
				<div>
					<h3
						className={`text-gray-400 font-semibold text-xl hover:cursor-pointer
					${activeButtonid === 1 ? 'hidden' : 'block'}`}
						onClick={() => setActiveButtonid(previousID => previousID - 1)}
					>
					Go Back
					</h3>
				</div>

				<Button
					htmlType='submit'
					className={`text-white text-xl font-semibold hover:bg-blue-400 h-[60px] w-[130px]
                        ${activeButtonid === 4 ? 'bg-purplishBlue' : 'bg-blue-900'}`}
					size='large'
					onClick={handleNextStep}
					disabled={activeButtonid === 1 ? !isPersonalInfoValid() : false}
				>
					{activeButtonid === 4 ? 'Confirm' : 'Next Step'}
				</Button>
			</div>

		</div>
	);
};

export default FormComponent;
