import './ModalWrap.sass';

const ModalWrap = ({title, children}) => {
    return (
        <div className="modal-wrap">
            <div className="modal">
                <div className="modal__head">
                    <h2 className="modal__title">{title}</h2>
                    <button className="modal__close">close</button>
                </div>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalWrap;
