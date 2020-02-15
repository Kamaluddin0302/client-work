import {
    ADD_CHANNEL_PROFILE,
    ADD_CHANNEL_PROFILE_ERROR,
    ADD_CHANNEL_PROFILE_SUCCESS,
    GET_CHANNEL_PROFILE,
    GET_CHANNEL_PROFILE_ERROR,
    GET_CHANNEL_PROFILE_SUCCESS
} from '../actions'

export const addChannelProfile = (data) => ({
    type: ADD_CHANNEL_PROFILE,
    payload: { data }
});

export const addChannelProfileSuccess = (data) => ({
    type: ADD_CHANNEL_PROFILE_SUCCESS,
    payload: data
});
export const addChannelProfileError = (message) => ({
    type: ADD_CHANNEL_PROFILE_ERROR,
    payload: { message }
});

export const getChannelProfile = () => ({
    type: GET_CHANNEL_PROFILE,
});

export const getChannelProfileSuccess = (data) => ({
    type: GET_CHANNEL_PROFILE_SUCCESS,
    payload: data
});
export const getChannelProfileError = (message) => ({
    type: GET_CHANNEL_PROFILE_ERROR,
    payload: { message }
});