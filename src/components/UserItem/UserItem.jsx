import './UserItem.sass';

const UserItem = ({name, pay, currency}) => {
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
                    title="Редактировать">
                    Редактировать
                </button>
                <button 
                    className="user-btn user-btn--delete"
                    title="Удалить">
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default UserItem
