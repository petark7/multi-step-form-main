import {useState} from 'react';
import {Button} from 'antd';
import {buttonList} from '../data/buttonList.jsx';
import PersonalInfo from './personalInfo.jsx';
import FormContent from './ui/formContent.jsx';
import SelectPlan from './selectPlan.jsx';

const FormComponent = () => {
	const [activeButtonid, setActiveButtonid] = useState(1);

	return (
		<div className='h-screen flex flex-col items-center justify-evenly'>
			<div className='flex gap-3 text-white'>
				{buttonList(activeButtonid, setActiveButtonid)}
			</div>

			<FormContent stylingClass='flex flex-col gap-4'>
				{/* <PersonalInfo/> */}
				<SelectPlan/>
			</FormContent>

			<div className='w-full flex items-center justify-end'>
				<Button
					className='bg-blue-900 text-white font-bold hover:bg-blue-400'
					size='large'
				>Next Step
				</Button>
			</div>

		</div>
	);
};

export default FormComponent;
