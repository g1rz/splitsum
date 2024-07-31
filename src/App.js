import React from 'react';

import './App.sass';
import Header from './components/Header/Header';
import ModalUser from './components/ModalUser/ModalUser';
import Results from './components/Results/Results';
import Users from './components/Users/Users';


const defaultUsers = [
	{
		id: 0,
		name: 'Ивановы',
		count: 2,
		pay: 4100,
		desc: 'Мясо, сок',
	}, {
		id: 1,
		name: 'Петровы',
		count: 2,
		pay: 0,
		desc: '',
	}, {
		id: 2,
		name: 'Сидоровы',
		count: 2,
		pay: 760,
		desc: 'арбуз, угли',
	}, {
		id: 3,
		name: 'Дмитрий',
		count: 1,
		pay: 1560,
		desc: 'Пиво, вино, масло',
	}, {
		id: 4,
		name: 'Мария',
		count: 1,
		pay: 100,
		desc: '',
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

	const addUser = (name, pay, count) => {
		let id = users.length > 0 ? users[users.length - 1].id + 1 : 0;
		
		const newUsers = [...users, {id, name, pay, count}];
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
						<div className="column">
							<Results
								users={users}/>
						</div>
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
