import React from 'react';
import ModalWrap from '../ModalWrap/ModalWrap';


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
                    <div className="form-input-wrap form-input-wrap--rub">
                        <input id="user_pay" type="text" name="pay" className="form-input" />
                        <span className="form-input-wrap__icon">&#8381;</span>
                    </div> 
                </div>

                <div className="form-group form-group--full text-center">
                    <button className="btn form-btn">Добавить</button>
                </div>
                
            </form>
        </ModalWrap>
    )
}

export default ModalAdd;
