import './ModalUser.sass';


const ModalsUser = () => {
    return (
        <div className="modal-wrap">
            <div className="modal">
                <div className="modal__head">
                    <h2 className="modal__title">Добавьте участника</h2>
                    <button className="modal__close">close</button>
                </div>
                <div className="modal__content">
                    <form className="form">
                        <div className="form-group">
                            <label htmlFor="user_name" className="form-label">Имя:</label>
                            <input id="user_name" type="text" name="name" className="form-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="user_pay" className="form-label">Траты:</label>
                            <div className="form-input-wrap form-input-wrap--rub">
                                <input id="user_pay" type="text" name="pay" className="form-input" />
                                <span className="form-input-wrap__icon">&#8381;</span>
                            </div> 
                        </div>

                        <div className="form-group form-group--full text-center">
                            <button className="btn form-btn">Добавить</button>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalsUser;
