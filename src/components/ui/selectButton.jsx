const SelectButton = (
	{
		id,
		icon,
		name,
		price,
		setSelectedPlan,
		selectedPlan,
		yearlySelected,
	},
) => {
	const isSelected = selectedPlan === id;
	return (
		<div
			onClick={() => setSelectedPlan(id)}
			className={`w-full h-[100px] transition-all duration-100 flex items-center justify-start gap-3 border
         p-5 rounded-xl hover:border-blue-500 hover:cursor-pointer
        ${isSelected ? 'border-blue-400' : 'border-gray-300'}`}>
			<div className='h-full'>
				<img src={icon}/>
			</div>
			<div>
				<h4 className='font-bold text-blue-900 text-md'>{name}</h4>
				<h4 className='text-gray-400'>{price}</h4>
				{yearlySelected && <h4 className='text-blue-900 font-semibold'>2 months free</h4>}
			</div>
		</div>
	);
};

export default SelectButton;
