import React from 'react';
import classNames from 'classnames';

import './ModalUser.sass';


const ModalUser = ({ handleModal, addUser, users, editUserID, editUser }) => {

    const [name, setName] = React.useState('');
    const [pay, setPay] = React.useState('');
    const [isShowNameError, setIsShowNameError] = React.useState(false);
    const [isShowPayError, setIsShowPayError] = React.useState(false);

    const modalRef = React.useRef(null);

    const handleOutsideclick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(modalRef.current)) {
            handleModal();
        }
    };

    const changeName = (e) => {
        setName(e.target.value);
        if (e.target.value.length > 0) {
            setIsShowNameError(false);
        }
    };

    const changePay = (e) => {
        const payValue = e.target.value;

        if (payValue === '' || payValue == 0) {
            setPay('');
        } else {
            if ( payValue.match(/^\d*\.?\d*$/gi) ) {
                setPay(payValue);
                if (payValue.length > 0) {
                    setIsShowPayError(false);
                }
            }
        }
        
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (!name) {
            setIsShowNameError(true);
        }

        if (!pay) {
            setIsShowPayError(true);
        }

        if (name && pay) {

            if (editUserID === null) {
                addUser(name, parseFloat(pay));
                handleModal();
            } else {
                editUser({
                    id: editUserID, 
                    name: name, 
                    pay: parseFloat(pay)
                });
                handleModal();
            }
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideclick);

        if (editUserID !== null) {
            const curUser = users.filter((item) => item.id == editUserID)[0];
            setName(curUser.name);
            setPay(curUser.pay);
        }

        return () => document.body.removeEventListener('click', handleOutsideclick);
    }, []);

    let title = editUserID === null ? 'Добавьте участника' : 'Редактирование участника';
    let btnText = editUserID === null ? 'Добавить' : 'Сохранить';

    return (
        <div className="modal-wrap">
            <div className="modal" ref={modalRef}>
                <div className="modal__head">
                    <h2 className="modal__title">{title}</h2>
                    <button 
                        className="modal__close" 
                        onClick={ () => handleModal() }>
                        close
                    </button>
                </div>
                <div className="modal__content">
                    <form className="form" onSubmit={submitForm}>
                        <div className="form-group">
                            <label 
                                htmlFor="user_name" 
                                className="form-label">
                                Имя:
                            </label>
                            <input 
                                id="user_name"
                                type="text" 
                                name="name" 
                                value={name}
                                onChange={changeName}
                                className={classNames('form-input', {'form-input--error': isShowNameError})} />
                            {isShowNameError && (
                                <div className="form-error">
                                    Введите имя
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label 
                                htmlFor="user_pay" 
                                className="form-label">
                                Траты:
                            </label>
                            <div className="form-input-wrap form-input-wrap--rub">
                                <input 
                                    id="user_pay" 
                                    type="text" 
                                    name="pay" 
                                    value={pay}
                                    onChange={changePay}
                                    className={classNames('form-input', {'form-input--error': isShowPayError})} />
                                <span className="form-input-wrap__icon">&#8381;</span>
                            </div> 
                            {isShowPayError && (
                                <span className="form-error">
                                    Введите траты
                                </span>
                            )}
                        </div>

                        <div className="form-group form-group--full text-center">
                            <button className="btn form-btn">{btnText}</button>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalUser;
