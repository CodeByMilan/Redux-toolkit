import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../src/Config";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";

const initialState = {
    // username:'',
    // email:'',
    // password:'',
    user: null,
    token: null,
    status: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setStatus(state, action) {
            state.status = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
    },
});
export const { setStatus, setUser, setToken,resetStatus } = authSlice.actions;
export default authSlice.reducer;

export function register(data) {
    return async function registerThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await API.post(`/register`, data);
            if (response.status == 201) {
                dispatch(setUser(response.data));
                dispatch(setStatus(STATUSES.SUCCESS))  
            } else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        }
        catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
            }
  };
}
export function login(data) {
    return async function loginThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const response = await API.post(`/login`, data);
        if (response.status == 200 && response.data.token) {
            dispatch(setToken(response.data.token));
           dispatch(setStatus(STATUSES.SUCCESS))
        } else {
            dispatch(setStatus(STATUSES.ERROR));
        }
        }
        catch (error) { 
            dispatch(setStatus(STATUSES.ERROR))
            }
    };
}
