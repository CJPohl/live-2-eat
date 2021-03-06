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
    return response.data;
});

// Search food
export const searchFoods = createAsyncThunk('food/search', async (search) => {
    const response = await axios.get(`http://localhost:5000/food/search/${search}`);
    return response.data;
})

// Update bio
export const updateAbout = createAsyncThunk('profile/update/about', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/about/update', {userId: body._id, about: body.bio});
    return response.data;
});

// Update height
export const updateHeight = createAsyncThunk('profile/update/height', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/height/update', {userId: body._id, height: body.height});
    return response.data;
});

// Update weight goal type
export const updateWeightGoalType = createAsyncThunk('profile/update/weight-goal-type', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/weight-goal-type/update', {userId: body._id, weightGoalType: body.weightGoalType});
    return response.data;
});

// Update weight goal
export const updateWeightGoal = createAsyncThunk('profile/update/weight-goal', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/weight-goal/update', {userId: body._id, weightGoal: body.weightGoal});
    return response.data;
});

// Update weight
export const updateWeight = createAsyncThunk('profile/update/weight', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/weight/update', {userId: body._id, weight: body.weight});
    return response.data;
});

// Set New Profile to false
export const falsifyNewUser = createAsyncThunk('profile/falsify', async (user) => {
    const response = await axios.put('http://localhost:5000/profile/new-user/falsify', {userId: user._id});
    return response.data;
});

// Update BMI
export const updateBMI = createAsyncThunk('profile/update/bmi', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/bmi/update', {userId: body._id, bmi: body.bmi});
    return response.data;
});

// Update Calorie Max
export const updateCalorieMax = createAsyncThunk('profile/update/calorie-max', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/calorie-max/update', {userId: body._id, calorieMax: body.calorieMax});
    return response.data;
});

/// SOCIAL ///

// Follow profile
export const followProfile = createAsyncThunk('profile/follow', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/follow', {followerId: body.followerId, followedId: body.followedId});
    return response.data;
});

// Unfollow profile
export const unfollowProfile = createAsyncThunk('profile/unfollow', async (body) => {
    const response = await axios.put('http://localhost:5000/profile/unfollow', {followerId: body.followerId, followedId: body.followedId});
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
                state.status = 'idle';
                state.profileSearch = action.payload;
            })
            .addCase(searchFoods.fulfilled, (state, action) => {
                state.status = 'idle';
                state.foodSearch = action.payload;
            })
            .addCase(updateAbout.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(updateHeight.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(updateWeightGoalType.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(updateWeightGoal.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(updateWeight.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(falsifyNewUser.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(updateBMI.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(updateCalorieMax.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(followProfile.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload.updatedFollower;
            })
            .addCase(unfollowProfile.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload.updatedFollower;
            })
    }
});

export const {initSlice} = profileSlice.actions;

export default profileSlice.reducer;

export const selectProfile = (state) => state.profile.user;

export const selectProfileSearchResults = (state) => state.profile.profileSearch;

export const selectFoodSearchResults = (state) => state.profile.foodSearch;

export const selectIsNew = (state) => (state.profile.user) ? state.profile.user.new_user : '';