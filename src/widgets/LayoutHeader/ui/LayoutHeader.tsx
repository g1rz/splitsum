import { Container } from '~/shared/ui';
import style from './LayoutHeader.module.scss';

export const LayoutHeader = () => {
    return (
        <div className={style.header}>
            <Container>
                <h1 className={style.header__title}>SplitSum</h1>
            </Container>
        </div>
    );
};
