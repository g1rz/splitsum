import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product, ProductId } from './types';

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
export const selectProductById = (state: RootState, productId: ProductId) => {
    state.products.find((product) => product.id === productId) || null;
};
