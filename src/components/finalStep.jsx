import TitleText from './ui/titleText.jsx';

const FinalStep = () => (
	<div className='flex flex-col gap-5'>
		<TitleText title={'Finishing up'}>
            Double-check everything looks OK before confirming.
		</TitleText>

		<div className='flex flex-col gap-5 bg-slate-50 rounded-xl p-4 text-xl'>
			<div className='flex justify-between items-center'>
				<div>
					<div className='text-blue-900 font-bold'>Arcade (Monthly)</div>
					<div className='text-gray-400 underline hover:cursor-pointer'>Change</div>
				</div>
				<div className='text-blue-900 font-bold'>$90/yr</div>
			</div>

			<hr className='h-[2px] w-full bg-gray-100 border-0 rounded'/>

			<div className='flex justify-between items-center'>
				<div className='text-gray-400'>Online service</div>
				<div className='text-blue-900 font-semibold'>+$10/yr</div>
			</div>

			<div className='flex justify-between items-center'>
				<div className='text-gray-400'>Larger storage</div>
				<div className='text-blue-900 font-semibold'>+$20/yr</div>
			</div>
		</div>

		<div className='flex justify-between items-center mx-5'>
			<div className='text-gray-400 text-xl'>Total (per year)</div>
			<div className={'text-purplishBlue text-2xl font-bold'}>$120/yr</div>
		</div>
	</div>
);

export default FinalStep;
