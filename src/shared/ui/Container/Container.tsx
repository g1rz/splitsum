import style from './Container.module.scss';

export const Container = ({ children }: TChildReactNode) => {
    return <div className={style.container}>{children}</div>;
};
