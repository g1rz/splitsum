import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TUser } from './types';

const initialState: TUser[] = [];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<TUser[]>) => {
            return action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
