import { useEffect, useState } from 'react';
import { selectAllUsers } from '~/entities/user';
import { useAppSelector } from '~/shared/model/hooks';
import { Container } from '~/shared/ui';
import Header from '~/widgets/LayoutHeader/LayoutHeader';
import ModalUser from '~/widgets/ModalUser/ModalUser';
import Results from '~/widgets/Results/Results';
import Users from '~/widgets/Users/Users';

const defaultUsers = [
    {
        id: 0,
        name: 'Ивановы',
        count: 2,
        pay: 4100,
        desc: 'Мясо, сок',
    },
    {
        id: 1,
        name: 'Петровы',
        count: 2,
        pay: 0,
        desc: '',
    },
    {
        id: 2,
        name: 'Сидоровы',
        count: 2,
        pay: 760,
        desc: 'арбуз, угли',
    },
    {
        id: 3,
        name: 'Дмитрий',
        count: 1,
        pay: 1560,
        desc: 'Пиво, вино, масло',
    },
    {
        id: 4,
        name: 'Мария',
        count: 1,
        pay: 100,
        desc: '',
    },
];

export const CalcPage = () => {
    const [users, setUsers] = useState(defaultUsers);
    const [isShowModal, setIsShowModal] = useState(false);
    const [editUserID, setEditUserID] = useState(null);

    const usersRX = useAppSelector(selectAllUsers);

    const handleModal = () => {
        console.log('cloise');

        setEditUserID(null);
        setIsShowModal(!isShowModal);
    };

    const addUser = (name, pay, count) => {
        let id = users.length > 0 ? users[users.length - 1].id + 1 : 0;

        const newUsers = [...users, { id, name, pay, count }];
        setUsers(newUsers);
    };

    const handleEditUser = (id) => {
        setEditUserID(id);
        setIsShowModal(true);
    };

    const editUser = (newUser) => {
        const newUsers = users.map((user) => {
            if (user.id === newUser.id) {
                return newUser;
            }
            return user;
        });

        setUsers(newUsers);
    };

    const deleteUser = (id) => {
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    };

    useEffect(() => {
        console.log(usersRX);
    }, []);

    return (
        <>
            <Container>
                <div className="row">
                    <div className="column">
                        <Users
                            users={users}
                            handleModal={handleModal}
                            handleEditUser={handleEditUser}
                            deleteUser={deleteUser}
                        />
                    </div>
                    <div className="column">
                        <Results users={users} />
                    </div>
                </div>
            </Container>

            {isShowModal && (
                <ModalUser
                    handleModal={handleModal}
                    addUser={addUser}
                    users={users}
                    editUserID={editUserID}
                    editUser={editUser}
                />
            )}
        </>
    );
};
