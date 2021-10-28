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
            
            {users.length > 0 && userList}

            {users.length === 0 && (
                <div className="empty">
                    <div className="empty__text">
                        <p>Список участников пуст</p>
                        <p></p>
                    </div>
                    <svg className="empty__icon"  x="0px" y="0px" viewBox="0 0 490.2 490.2">
                        <path d="M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z"/>
                        <path d="M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z"/>
                    </svg>
                </div>
            )}
            
        </ColumnItem>
    )
}

export default Users
