const SelectButton = (
	{
		id,
		icon,
		name,
		price,
		setSelectedPlan,
		selectedPlan,
	},
) => {
	const isSelected = selectedPlan === id;
	return (
		<div
			onClick={() => setSelectedPlan(id)}
			className={`w-full transition-all duration-100 flex items-center justify-start gap-3 border
         p-5 rounded-xl hover:border-blue-500 hover:cursor-pointer
        ${isSelected ? 'border-blue-400' : 'border-gray-300'}`}>
			<img src={icon}/>
			<div>
				<h4 className='font-bold text-blue-900 text-md'>{name}</h4>
				<h4 className='text-gray-400'>{price}</h4>
			</div>
		</div>
	);
};

export default SelectButton;
