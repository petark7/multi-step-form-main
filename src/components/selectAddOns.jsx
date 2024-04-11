import CheckboxTitleDesc from './ui/checkboxTitleDesc.jsx';
import TitleText from './ui/titleText.jsx';

const SelectAddOns = () => (
	<div className='flex flex-col gap-5'>
		<TitleText title={'Pick add-ons'}>
            Add-ons help enchance your gaming experience.
		</TitleText>

		<CheckboxTitleDesc
			title={'Online service'}
			description={'Access to multiplayer games'}
			additionalText={'+$1/mo'}
		/>
		<CheckboxTitleDesc
			title={'Larger storage'}
			description={'Extra 1TB of cloud save'}
			additionalText={'+$2/mo'}
		/>
		<CheckboxTitleDesc
			title={'Customizable profile'}
			description={'Custom theme on your profile'}
			additionalText={'+$2/mo'}
		/>
	</div>
);

export default SelectAddOns;
