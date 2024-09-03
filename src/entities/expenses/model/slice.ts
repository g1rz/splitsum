import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Expense } from './types';

const initialState: Expense[] = [];

export const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<Expense>) => {
            state.push(action.payload);
        },
    },
});

export const { addExpense } = expenseSlice.actions;

export const selectAllExpenses = (state: RootState) => state.expenses;
