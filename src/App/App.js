// import css
import './App.css';
// import react
import { Route, Switch } from 'react-router-dom';
// Routes for App
import LogIn from './LogIn/LogIn';
import Information from './Information/Information';
import About from './About/About';
// Nav Bar
import NavBar from './NavBar/NavBar';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route
					exact
					path='/'
					render={(routerProps) => (
						<>
							<NavBar />
							<LogIn {...routerProps} />
						</>
					)}
				/>
				<Route
					exact
					path='/info'
					render={(routerProps) => (
						<>
							<NavBar />
							<Information {...routerProps} />
						</>
					)}
				/>
				<Route
					exact
					path='/about'
					render={(routerProps) => (
						<>
							<NavBar />
							<About {...routerProps} />
						</>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
