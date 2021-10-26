import React from 'react';
import ColumnItem from '../ColumnItem/ColumnItem';

import './Users.sass';

const Users = () => {
    return (
        <ColumnItem 
            title="Пользователи"
            handleButton={() => console.log('click users')}>
            test
        </ColumnItem>
    )
}

export default Users
