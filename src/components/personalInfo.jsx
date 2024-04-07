import {Form, Input} from 'antd';
import TitleText from './ui/titleText';

const PersonalInfo = () => (
	<div className='flex flex-col gap-4 font-'>

		<TitleText title={'Personal Info'}>
			Please provide your name, email address, and phone number.
		</TitleText>

		<Form layout='vertical' requiredMark={false}>
			<Form.Item
				label={<span className='text-blue-900'>Name</span>}
				name='name'
				rules={[
					{
						required: true,
						message: 'Please input your name!',
					},
				]}
			>
				<Input
					className='h-[50px] text-xl'
					placeholder='e.g Stephen King'
				/>
			</Form.Item>

			<Form.Item
				label={<span className='text-blue-900'>Email Address</span>}
				name='email_address'
				rules={[
					{
						required: true,
						message: 'Please input your email address!',
					},
				]}
			>
				<Input
					className='h-[50px] text-xl'
					placeholder='e.g stephenkind@lorem.com'
				/>
			</Form.Item>

			<Form.Item
				label={<span className='text-blue-900'>Phone Number</span>}
				name='phone_number'
				style={{flexDirection: 'column', alignItems: 'flex-start'}}
				rules={[
					{
						required: true,
						message: 'Please input your phone number!',
					},
				]}
			>
				<Input
					className='h-[50px] text-xl'
					placeholder='+1 234 567 890'
				/>
			</Form.Item>
		</Form>
	</div>);

export default PersonalInfo;
