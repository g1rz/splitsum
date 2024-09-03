import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserId } from './types';

const initialState: User[] = [];

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
