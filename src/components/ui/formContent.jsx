const FormContent = ({children, stylingClass}) => (
	<div className={`bg-white p-8 rounded-xl shadow-md ${stylingClass}`}>
		{children}
	</div>
);

export default FormContent;
