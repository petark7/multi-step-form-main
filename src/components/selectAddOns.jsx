import SelectAddon from './ui/selectAddon.jsx';
import TitleText from './ui/titleText.jsx';

const SelectAddOns = ({addonPrices, selectedAddons, toggleSelectedAddon}) => {
	const {
		onlineServicePrice,
		largerStoragePrice,
		customizableProfilePrice,
	} = addonPrices;

	console.log('the selected addons are:', selectedAddons);
	return (
		<div className='flex flex-col gap-5'>
			<TitleText title={'Pick add-ons'}>
				Add-ons help enchance your gaming experience.
			</TitleText>

			<SelectAddon
				toggleSelectedAddon={toggleSelectedAddon}
				id={'onlineService'}
				title={'Online service'}
				description={'Access to multiplayer games'}
				additionalText={`+$${onlineServicePrice}/mo`}
			/>

			<SelectAddon
				toggleSelectedAddon={toggleSelectedAddon}
				id={'largerStorage'}
				title={'Larger storage'}
				description={'Extra 1TB of cloud save'}
				additionalText={`+$${largerStoragePrice}/mo`}
			/>

			<SelectAddon
				toggleSelectedAddon={toggleSelectedAddon}
				id={'customizableProfile'}
				title={'Customizable profile'}
				description={'Custom theme on your profile'}
				additionalText={`+$${customizableProfilePrice}/mo`}
			/>
		</div>
	);
};

export default SelectAddOns;
