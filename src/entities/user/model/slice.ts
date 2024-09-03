import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TUser } from './types';

const initialState: TUser[] = [];

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<TUser>) => {
            state.push(action.payload);
        },
    },
});

export const { addUser } = usersSlice.actions;

export const selectAllUsers = (state: RootState) => state.users;
