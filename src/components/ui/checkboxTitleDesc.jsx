import {Checkbox} from 'antd';

const CheckboxTitleDesc = () => (
	<div className='flex items-center justify-center gap-6 p-4 border rounded-xl hover:cursor-pointer
     hover:border-purplishBlue'>

		<Checkbox type='checkbox' className='scale-[1.5]'/>

		<div>
			<h4 className='font-bold text-md text-blue-900'>Online service</h4>
			<h4 className='text-md text-gray-500'>Access to multiplayer games</h4>
		</div>

		<div className='flex items-center justify-center'>
			<h4 className='text-purplishBlue font-semibold'>+$1/mo</h4>
		</div>
	</div>
);

export default CheckboxTitleDesc;
