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
	const [editUserID, setEditUserID] = React.useState(null);


	const handleModal = () => {
		setEditUserID(null);
		setIsShowModal(!isShowModal);
	};

	const addUser = (name, pay) => {
		let id = users.length > 0 ? users[users.length - 1].id + 1 : 0;
		
		const newUsers = [...users, {id, name, pay}];
		setUsers(newUsers);
	};

	const handleEditUser = (id) => {
		setEditUserID(id);
		setIsShowModal(true);
	}

	const editUser = (newUser) => {
		const newUsers = users.map(user => {
			if (user.id === newUser.id) {
				return newUser;
			}
			return user;
		});

		setUsers(newUsers);
	}

	const deleteUser = (id) => {
		const newUsers = users.filter(user => user.id !== id);
		setUsers(newUsers);
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
								handleModal={handleModal}
								handleEditUser={handleEditUser}
								deleteUser={deleteUser}/>
						</div>
						<div className="column">test</div>
					</div>					
				</div>
			</main>

			{isShowModal && 
				<ModalUser
					handleModal={handleModal}
					addUser={addUser}
					users={users}
					editUserID={editUserID}
					editUser={editUser}/>
			}
			
		</div>
	);
}

export default App;
