import {ConfigProvider} from 'antd';
import mobileImage from '../assets/images/bg-sidebar-mobile.svg';
import FormComponent from './components/form.jsx';
import './App.css';
import {DEEP_BLUE} from './constants/colors.jsx';

function App() {
	return (
		<div className='relative w-[800px]'>
			<div className='absolute top-0 left-0 w-full h-[150px] z-0' style={{backgroundImage: `url(${mobileImage})`, backgroundSize: 'cover'}}></div>
			<div className='relative z-10'>
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: DEEP_BLUE,
						},
					}}
				>
					<FormComponent/>
				</ConfigProvider>
			</div>
		</div>
	);
}

export default App;
