import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Initial state for client
const initialState = {
    user: null,
    profileSearch: null,
    foodSearch: null,
    status: 'idle',
    error: null   
};

// Fetch user profile
export const fetchMain = createAsyncThunk('profile/main', async (token) => {
    const response = await axios.get(`http://localhost:5000/profile/main/${token}`);
    return response.data;
});

// Search profiles
export const searchProfiles = createAsyncThunk('profile/search', async (search) => {
    const response = await axios.get(`http://localhost:5000/profile/search/${search}`);
    console.log(response.data);
    return response.data;
});


// Profile reducers
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        initSlice(state, action) {
            state.user = null;
            state.profileSearch = null;
            state.foodSearch = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMain.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(searchProfiles.fulfilled, (state, action) => {
                state.profileSearch = action.payload;
            })
    }
});

export const {initSlice} = profileSlice.actions;

export default profileSlice.reducer;

export const selectProfile = (state) => state.profile.user;

export const selectProfileSearchResults = (state) => state.profile.profileSearch;