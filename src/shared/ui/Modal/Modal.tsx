import React, { ReactNode } from 'react';

import style from './Modal.module.scss';

interface IModalProps {
    title: string;
    onClickOutside: () => void;
    onClose: () => void;
    children: ReactNode;
}

export const Modal = ({
    title,
    onClickOutside,
    children,
    onClose,
}: IModalProps) => {
    const modalRef = React.useRef(null);

    const handleOutsideclick = (e: Event) => {
        if (!onClickOutside) {
            return;
        }

        const path = e.path || (e.composedPath && e.composedPath());
        console.log(path.includes(modalRef.current));

        if (!path.includes(modalRef.current)) {
            onClickOutside();
        }
    };

    const handleKyeDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKyeDown);
        document.body.addEventListener('click', handleOutsideclick);

        return () => {
            document.addEventListener('keydown', handleKyeDown);
            document.body.removeEventListener('click', handleOutsideclick);
        };
    }, []);

    return (
        <div className={style.modalWrap}>
            <div className={style.modal} ref={modalRef}>
                <div className={style.modal__head}>
                    <h2 className={style.modal__title}>{title}</h2>
                    <button
                        className={style.modal__close}
                        onClick={() => onClose()}
                    >
                        close
                    </button>
                </div>
                <div className={style.modal__content}>{children}</div>
            </div>
        </div>
    );
};
