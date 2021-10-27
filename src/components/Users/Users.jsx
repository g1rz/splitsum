import React from 'react';
import ColumnItem from '../ColumnItem/ColumnItem';
import UserItem from '../UserItem/UserItem';

import './Users.sass';

const Users = ({users}) => {

    const userList = users.map(item => {
        return <UserItem key={item.id} name={item.name} pay={item.pay} currency={item.currency}/>
    })

    return (
        <ColumnItem 
            title="Пользователи"
            handleButton={() => console.log('click users')}>
            
            {userList}
            
        </ColumnItem>
    )
}

export default Users
