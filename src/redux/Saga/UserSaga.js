import { takeLatest, all, put } from 'redux-saga/effects';
import END_POINTS from '../../service/EndPoints';
import {doGet, doPost } from '../../service';
import Actions from '../action';

export function* UserListSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.USER_LIST, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.UsersListSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.UsersListFailure(error))

    }
}

export function* addUserSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.REGISTER, params)
        yield put(Actions.AddUserSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.AddUserFailure(error))

    }
}
export function* UpdateUserSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.UPDATE_USER, params)
        yield put(Actions.UpdateUserSuccess(response))
        if (callback) {
            callback(response)
        }
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.UpdateUserFailure(error))

    }
}

export function* DeleteUserSaga({ params, callback }) {
    try {
        const response = yield doPost(END_POINTS.DELETE_USER, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.DeleteUserSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.DeleteUserFailure(error))
    }
}

export function* DashboardSaga({ params, callback }) {
    try {
        const response = yield doGet(END_POINTS.DASHBOARD, params)
        if (callback) {
            callback(response)
        }
        yield put(Actions.GetDashBoardSuccess(response))
    } catch ({ error }) {
        if (callback) {
            callback(error)
        }
        yield put(Actions.GetDashBoardFailure(error))
    }
}


export default function* UserWatcher() {
    yield all([
        takeLatest(Actions.USER_LIST, UserListSaga),
        takeLatest(Actions.ADD_USER, addUserSaga),
        takeLatest(Actions.DELETE_USER, DeleteUserSaga),
        takeLatest(Actions.UPDATE_USER, UpdateUserSaga),
        takeLatest(Actions.DASHBOARD, DashboardSaga)

    ]);
}
