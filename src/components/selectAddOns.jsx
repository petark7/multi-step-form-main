import CheckboxTitleDesc from './ui/checkboxTitleDesc.jsx';
import TitleText from './ui/titleText.jsx';

const SelectAddOns = () => (
	<div className='flex flex-col gap-5'>
		<TitleText title={'Pick add-ons'}>
            Add-ons help enchance your gaming experience.
		</TitleText>

		<CheckboxTitleDesc/>
		<CheckboxTitleDesc/>
		<CheckboxTitleDesc/>
	</div>
);

export default SelectAddOns;
