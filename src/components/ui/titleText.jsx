const TitleText = ({title, children}) => (
	<>
		<h1 className='w-full text-start text-3xl text-blue-900 font-bold'>
			{title}
		</h1>
		<p className='w-full text-start text-xl text-gray-400'>
			{children}
		</p>
	</>
);

export default TitleText;
