import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { expenseSlice } from '~/entities/expenses/model/slice';
import { productsSlice } from '~/entities/products';
import { usersSlice } from '~/entities/user';

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        expenses: expenseSlice.reducer,
        products: productsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
