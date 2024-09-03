import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TProduct } from './types';

const initialState: TProduct[] = [];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<TProduct>) => {
            state.push(action.payload);
        },
    },
});

export const { addProduct } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.users;
