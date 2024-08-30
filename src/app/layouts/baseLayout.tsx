import { ReactNode } from 'react';
import { Layout } from '~/shared/ui/Layout/Layout';
import { LayoutHeader } from '~/widgets/LayoutHeader';

type TBaseLayout = {
    children: ReactNode;
};

const BaseLayout = ({ children }: TBaseLayout) => {
    return <Layout headerSlot={<LayoutHeader />}>{children}</Layout>;
};

export default BaseLayout;
