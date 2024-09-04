import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserId } from './types';

const initialState: User[] = [
    {
        id: '1' as UserId,
        name: 'sd',
        count: 1,
        expenses: 0,
    },
    {
        id: '2' as UserId,
        name: 'dfb',
        count: 1,
        expenses: 0,
    },
    {
        id: '3' as UserId,
        name: 'sdfbd',
        count: 1,
        expenses: 0,
    },
];

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
    },
});

export const { addUser } = usersSlice.actions;

export const selectAllUsers = (state: RootState) => state.users;
export const selectUserById = (state: RootState, userId: UserId) => {
    state.users.find((user) => user.id === userId) || null;
};
