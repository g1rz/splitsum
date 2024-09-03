import { ReactNode } from 'react';
declare const _brand: unique symbol;

declare global {
    export type TChildReactNode = {
        children?: ReactNode;
    };

    export type Brand<K, T> = K & { [_brand]: T };

    export type Id = number;

    declare type RootState = import('../src/app/appStore').RootState;
    declare type AppDispatch = import('../src/app/appStore').AppDispatch;
}

export {};
