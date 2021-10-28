import React from 'react';
import ModalWrap from '../ModalWrap/ModalWrap';

import './ModalAdd.sass';

const ModalAdd = () => {
    return (
        <ModalWrap title="Добавить пользователя">
            <form className="form">
                <div className="form-group">
                    <label htmlFor="user_name" className="form-label">Имя:</label>
                    <input id="user_name" type="text" name="name" className="form-input" />
                </div>

                <div className="form-group">
                    <label htmlFor="user_pay" className="form-label">Траты:</label>
                    <input id="user_pay" type="text" name="pay" className="form-input" />
                </div>
            </form>
        </ModalWrap>
    )
}

export default ModalAdd;
