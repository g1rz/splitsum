import { ReactNode } from 'react';
declare const _brand: unique symbol;

declare global {
    export type TChildReactNode = {
        children?: ReactNode;
    };

    export type Brand<K, T> = K & { [_brand]: T };

    export type Id = string;

    declare type RootState = import('../src/app/appStore').RootState;
    declare type AppDispatch = import('../src/app/appStore').AppDispatch;
}

export {};
