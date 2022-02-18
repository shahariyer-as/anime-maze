import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './Pages/Register/Register';
import Nav from './Pages/Shared/Nav/Nav';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='' element={<PrivateRoute><Home /></PrivateRoute>} />
					</Routes>
					<Routes>
						<Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
					</Routes>
					<Routes>
						<Route path='/login' element={<Login />} />
					</Routes>
					<Routes>
						<Route path='/register' element={<Register />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>

		</div>
	);
}

export default App;
