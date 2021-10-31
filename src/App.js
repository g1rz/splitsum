import React from 'react';

import './App.sass';
import Header from './components/Header/Header';
import ModalsUser from './components/ModalUser/ModalsUser';
import Users from './components/Users/Users';


const defaultUsers = [
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
];

function App() {

	const [users, setUsers] = React.useState(defaultUsers);
	const [isShowModal, setIsShowModal] = React.useState(false);

	const handleModal = () => {
		setIsShowModal(!isShowModal);
	}

	return (
		<div className="App">
			<Header/>
			<main>
				<div className="container">
					<div className="row">
						<div className="column">
							<Users 
								users={users}
								handleModal={handleModal}/>
						</div>
						<div className="column">test</div>
					</div>					
				</div>
			</main>

			{isShowModal && 
				<ModalsUser
					handleModal={handleModal}/>
			}
			
		</div>
	);
}

export default App;
