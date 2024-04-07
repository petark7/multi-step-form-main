import {Button} from 'antd';

const CircleButton = ({children, id, active, setActiveButtonid}) => (
	<Button
		className={`bg-blue-300  font-bold border 
        ${active === id ? 'border-none' : 'border-white'} 
        ${active === id ? 'bg-blue-200' : 'bg-transparent'}
        ${active === id ? 'text-blue-900' : 'text-white'}`}
		onClick={() => setActiveButtonid(id)}
		type='primary'
		size='large'
		shape='circle'>
		{children}
	</Button>
);

export default CircleButton;
