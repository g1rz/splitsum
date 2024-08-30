import { ReactNode } from 'react';

declare global {
    export type TChildReactNode = {
        children?: ReactNode;
    };
}

export {};
