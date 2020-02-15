import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { database } from '../../helpers/Firebase';
import {
    ADD_CHANNEL_PROFILE,
    ADD_CHANNEL_PROFILE_ERROR,
    ADD_CHANNEL_PROFILE_SUCCESS,
    GET_CHANNEL_PROFILE,
    GET_CHANNEL_PROFILE_ERROR,
    GET_CHANNEL_PROFILE_SUCCESS
} from '../actions'



export function* watchAddProfile() {
    yield takeEvery(ADD_CHANNEL_PROFILE, channelProfile);
}

const channelProfile = (data) => {
    let value = data.payload.data
    console.log("Data ", value)
    database.ref().child("Channel_Profile").push(value)
}

export function* watchGetProfile() {
    yield takeEvery(GET_CHANNEL_PROFILE, getChannelProfile);
}

const getChannelProfile = () => {
    database.ref().child("Channel_Profile").on("child_added",snap => {
        console.log(snap.val())
    })
}

export default function* rootSaga() {
    yield all([
        fork(watchAddProfile),
        fork(watchGetProfile),
    ]);
}