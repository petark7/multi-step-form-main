import {useState} from 'react';
import {Checkbox} from 'antd';
import PropTypes from 'prop-types';

const CheckboxTitleDesc = ({title, description, additionalText}) => {
	const [isChecked, setIsChecked] = useState(false);

	return	(
		<div className={`flex items-center justify-between gap-6
		p-4 px-6 rounded-xl hover:cursor-pointer hover:border-purplishBlue
		${isChecked ? 'border border-purplishBlue bg-blue-50/30' : 'border'}`}
		onClick={() => {
			setIsChecked(previousValue => !previousValue);
		}}>

			<Checkbox
				className='scale-[1.5]'
				type='checkbox'
				checked={isChecked}
			/>

			<div className='w-full'>
				<h4 className='font-bold text-md text-blue-900'>{title}</h4>
				<h4 className='text-md text-gray-500'>{description}</h4>
			</div>

			<div className='flex items-center justify-center'>
				<h4 className='text-purplishBlue font-semibold'>{additionalText}</h4>
			</div>
		</div>
	);
};

CheckboxTitleDesc.propTypes = {
	additionalText: PropTypes.string,
	description: PropTypes.string,
	title: PropTypes.string,
};

export default CheckboxTitleDesc;
