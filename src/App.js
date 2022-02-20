import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Error from './Pages/Shared/Error/Error';
import PieChart from './Pages/Home/Anime/Anime/PieChart/PieChart';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
						<Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/pc/:ChartId' element={<PieChart />} />

						<Route path='*' element={<Error />} />

					</Routes>

				</BrowserRouter>
			</AuthProvider>

		</div>
	);
}

export default App;
