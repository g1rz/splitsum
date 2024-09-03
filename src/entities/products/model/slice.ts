import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from './types';

const initialState: Product[] = [];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload);
        },
    },
});

export const { addProduct } = productsSlice.actions;

export const selectAllProducts = (state: RootState) => state.users;
