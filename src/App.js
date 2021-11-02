import React from 'react';

import './App.sass';
import Header from './components/Header/Header';
import ModalUser from './components/ModalUser/ModalUser';
import Users from './components/Users/Users';


const defaultUsers = [
	{
		id: 0,
		name: 'User 1',
		pay: 2000
	}, {
		id: 1,
		name: 'User 2',
		pay: 3000
	}
];

function App() {

	const [users, setUsers] = React.useState(defaultUsers);
	const [isShowModal, setIsShowModal] = React.useState(false);

	const handleModal = () => {
		setIsShowModal(!isShowModal);
	};

	const addUser = (name, pay) => {
		let id = users.length > 0 ? users[users.length - 1].id + 1 : 0;
		
		const newUsers = [...users, {id, name, pay}];
		setUsers(newUsers);
	};

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
				<ModalUser
					handleModal={handleModal}
					addUser={addUser}/>
			}
			
		</div>
	);
}

export default App;
