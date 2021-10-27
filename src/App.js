import React from 'react';

import './App.sass';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

function App() {

	const [users, setUsers] = React.useState([
		{
			id: 0,
			name: 'User 1',
			pay: 2000,
			currency: 'руб.'
		}, {
			id: 1,
			name: 'User 2',
			pay: 3000,
			currency: 'руб.'
		}
	]);

	return (
		<div className="App">
			<Header/>
			<main>
				<div className="container">
					<div className="row">
						<div className="column">
							<Users users={users}/>
						</div>
						<div className="column">test</div>
					</div>					
				</div>
			</main>
		</div>
	);
}

export default App;
