import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import '@styles/global.css';
import '@styles/normalize.css';
import Users from '@pages/Users';
import Questions from '../pages/Questions';
import Error from '@pages/Error';
import NotFound from '@pages/NotFound';


const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					 <Route exact path="/users" element={<Users/>} />
					<Route exact path="/questions" element={<Questions/>} />
					<Route exact path="/error" element={<Error/>} />
			
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;