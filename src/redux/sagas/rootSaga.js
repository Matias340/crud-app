import { all } from "redux-saga/effects";
import fetchUsersSaga from "./handlers/fetchUsers"

export default function* rootSaga() {
    yield all([fetchUsersSaga()]);
}
