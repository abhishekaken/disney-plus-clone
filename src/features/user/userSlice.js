import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    photo: '',

};

const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;

        },
        setSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;

        }
    }
});

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectUserName = state => state.user.name;

export const selectUserEmail = state => state.user.email;

export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;

