import {useState} from 'react';
import {Button} from 'antd';
import {buttonList} from '../data/buttonList.jsx';
import PersonalInfo from './personalInfo.jsx';
import FormContent from './ui/formContent.jsx';
import SelectPlan from './selectPlan.jsx';
import SelectAddOns from './selectAddOns.jsx';
import FinalStep from './finalStep.jsx';

const FormComponent = () => {
	const [activeButtonid, setActiveButtonid] = useState(1);

	return (
		<div className='h-screen flex flex-col items-center justify-between'>
			<div className='flex gap-3 text-white mt-10'>
				{buttonList(activeButtonid, setActiveButtonid)}
			</div>

			<FormContent stylingClass='flex flex-col gap-4 mx-6'>
				{/* <PersonalInfo/> */}
				{/* <SelectPlan/> */}
				{/* <SelectAddOns/> */}
				<FinalStep/>
			</FormContent>

			<div className='w-full flex items-center justify-between bg-white h-[100px] p-5'>
				<h3 className='text-gray-400 font-semibold text-xl hover:cursor-pointer'>Go Back</h3>

				<Button
					className='bg-blue-900 text-white text-xl font-semibold
					hover:bg-blue-400 h-[60px] w-[130px]'
					size='large'
				>Next Step
				</Button>
			</div>

		</div>
	);
};

export default FormComponent;
