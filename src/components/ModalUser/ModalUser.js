import React from 'react';
import classNames from 'classnames';

import './ModalUser.sass';


const ModalUser = ({ handleModal, addUser, users, editUserID, editUser }) => {

    const [name, setName] = React.useState('');
    const [pay, setPay] = React.useState('');
    const [count, setCount] = React.useState(1);
    const [desc, setDesc] = React.useState('');
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

        if ( payValue.match(/^\d*\.?\d*$/gi) ) {
            setPay(payValue);
        }
    };

    const changeCount = (e) => {
        setCount(() => {
            return e.target.value //? e.target.value : 1
        });
    };

    const submitForm = (e) => {
        e.preventDefault();

        console.log('submit');

        if (!name) {
            setIsShowNameError(true);
        }

        // if (!pay.match(/^\d*\.?\d*$/gi)) {
        //     // setIsShowPayError(true);
        //     console.log('dg');
        //     setPay(0);
        // }
        console.log(name, pay, count);
        if (name) {

            let tempPay = pay ? parseFloat(pay) : 0;
            if (editUserID === null) {
                addUser(name, tempPay, count, desc);
                handleModal();
            } else {
                editUser({
                    id: editUserID, 
                    name: name, 
                    pay: tempPay,
                    count,
                    desc,
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
            setCount(curUser.count);
            setDesc(curUser.desc);
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
                                htmlFor="user_name"
                                className="form-label">
                                Кол-во человек:
                            </label>
                            <input
                                id="user_name"
                                type="text"
                                name="name"
                                value={count}
                                onChange={changeCount}
                                onBlur={() => count ? count : 1}
                                className={classNames('form-input')} />

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
                        </div>
                        <div className="form-group">
                            <label 
                                htmlFor="user_desc" 
                                className="form-label">
                                Описание:
                            </label>
                            <div className="form-input-wrap">
                                <input 
                                    id="user_desc" 
                                    type="text" 
                                    name="pay" 
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    className={classNames('form-input')} />
                            </div> 
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
