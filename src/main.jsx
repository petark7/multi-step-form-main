import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
	<React.StrictMode>
		<div className='w-full h-screen flex items-center bg-slate-100'>
			<App />
		</div>
	</React.StrictMode>,
);
