import { ReactNode } from 'react';
import styles from './Layout.module.scss';

type TLayout = {
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
    children: ReactNode;
};

export const Layout = ({ headerSlot, footerSlot, children }: TLayout) => {
    return (
        <div className={styles.app}>
            {headerSlot}
            <main className={styles.app__main}>{children}</main>
            {footerSlot}
        </div>
    );
};
