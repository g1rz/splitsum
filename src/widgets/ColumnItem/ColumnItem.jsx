import './ColumnItem.sass';

const ColumnItem = ({ children, title, handleButton }) => {
    return (
        <div className="column-item">
            <div className="column-item__title">
                <h2>{title}</h2>
                {handleButton && (
                    <button 
                    className="column-item__btn btn"
                    onClick={() => handleButton()}>
                        button
                    </button>
                )}
            </div>
            <div className="column-item__content">
                {children}
            </div>
        </div>
    )
}

export default ColumnItem;
