import {
    ADD_CHANNEL_PROFILE,
    ADD_CHANNEL_PROFILE_ERROR,
    ADD_CHANNEL_PROFILE_SUCCESS,
    GET_CHANNEL_PROFILE,
    GET_CHANNEL_PROFILE_ERROR,
    GET_CHANNEL_PROFILE_SUCCESS
} from '../actions'

const INIT_STATE = {
    data: {},
    loading: false,
    error: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_CHANNEL_PROFILE:
            return { ...state, loading: true, error: '' };
        case ADD_CHANNEL_PROFILE_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: '' };
        case ADD_CHANNEL_PROFILE_ERROR:
            return { ...state, loading: false, data: '', error: action.payload.message };
        case GET_CHANNEL_PROFILE:
            return { ...state, loading: true, error: '', };
        case GET_CHANNEL_PROFILE_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: '' };
        case GET_CHANNEL_PROFILE_ERROR:
            return { ...state, loading: false, data: '', error: action.payload.message };

        default: return { ...state };
    }
}