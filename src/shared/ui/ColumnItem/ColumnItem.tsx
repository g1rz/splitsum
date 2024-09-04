import { ReactNode } from 'react';
import './ColumnItem.sass';

type ColumnItemProps = {
    children: ReactNode;
    title: string;
    rightHeaderContent?: ReactNode;
};

export const ColumnItem = ({
    children,
    title,
    rightHeaderContent,
}: ColumnItemProps) => {
    return (
        <div className="column-item">
            <div className="column-item__title">
                <h2>{title}</h2>
                {rightHeaderContent}
                {/* {handleButton && (
                    <button
                        className="column-item__btn btn"
                        onClick={() => handleButton()}
                    >
                        button
                    </button>
                )} */}
            </div>
            <div className="column-item__content">{children}</div>
        </div>
    );
};
