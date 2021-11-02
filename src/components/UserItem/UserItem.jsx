import './UserItem.sass';

const UserItem = ({id, name, pay, currency, handleEditUser, deleteUser}) => {
    return (
        <div className="user-item">
            <div className="user-info">
                <div className="user-info__pay">
                    <span className="user-info__item">{pay} {currency}</span>
                </div>
                <div className="user-info__name">
                    <span className="user-info__item">{name}</span>
                </div>
            </div>
            <div className="user-btns">
                <button 
                    className="user-btn user-btn--edit"
                    title="Редактировать"
                    onClick={() => handleEditUser(id)}>
                    Редактировать
                </button>
                <button 
                    className="user-btn user-btn--delete"
                    title="Удалить"
                    onClick={() => deleteUser(id)}>
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default UserItem
