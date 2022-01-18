import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import actionTypes from "../../actions/actionTypes";
import {axiosGetUsers, axiosCreateUsers, axiosDeleteUsers, axiosUpdateUsers, axiosGetUsersById} from "../requests/axiosUsers";

export function* handleGetUsers() {
    try {
        const users = yield call(axiosGetUsers)
        console.log(users);
        yield put({ type: actionTypes.GET_USERS_SUCCESS, users: users})
    }catch(err) {
        yield put({ type: actionTypes.GET_USERS_FAILED, message: err.message})
    }
}

export function* handleCreateUsers(state) {
    const {payload} = state;
    try {
        const users = yield call(axiosCreateUsers, payload)
        yield put({ type: actionTypes.CREATE_USERS_SUCCESS, users: users})
    }catch(err) {
        yield put({ type: actionTypes.CREATE_USERS_FAILED, message: err.message})
    }
}

export function* handleUpdateUsers(state) {
    const {payload : {id, formValue}} = state;
    console.log(id, formValue);
    try {
        const users = yield call(axiosUpdateUsers, id, formValue)
        yield put({ type: actionTypes.UPDATE_USERS_SUCCESS, users: users})
    }catch(err) {
        yield put({ type: actionTypes.UPDATE_USERS_FAILED, message: err.message})
    }
}

export function* handleDeleteUsers(state) {
    const {payload : id} = state;
    try {
        const users = yield call(axiosDeleteUsers, id)
        yield put({ type: actionTypes.DELETE_USERS_SUCCESS, payload: id})
    }catch(err) {
        yield put({ type: actionTypes.DELETE_USERS_FAILED, message: err.message})
    }
}

export function* handleGetUsersById(state) {
    const {payload} = state;
    try {
        const users = yield call(axiosGetUsersById, payload)
        console.log(users);
        yield put({ type: actionTypes.GET_USERS_BYID_SUCCESS, users })
    }catch(err) {
        yield put({ type: actionTypes.GET_USERS_BYID_FAILED, message: err.message})
    }
}

//los watcher
export function* watcherUserSaga() {
    yield takeEvery(actionTypes.GET_USERS_REQUESTED, handleGetUsers);
}

export function* watcherCreateUserSaga() {
    yield takeEvery(actionTypes.CREATE_USERS_REQUESTED, handleCreateUsers);
}

export function* watcherDeleteUserSaga() {
    yield takeLatest(actionTypes.DELETE_USERS_REQUESTED, handleDeleteUsers);
}

export function* watcherUpdateUserSaga() { 
    yield takeLatest(actionTypes.UPDATE_USERS_REQUESTED, handleUpdateUsers);
}
export function* watcherUsersByIdSaga() { 
    yield takeEvery(actionTypes.GET_USERS_BYID_REQUESTED, handleGetUsersById);
}


export default function* rootSaga() {
    yield all([
        watcherUserSaga(), 
        watcherCreateUserSaga(),
        watcherDeleteUserSaga(),
        watcherUpdateUserSaga(),
        watcherUsersByIdSaga()
    ])
}