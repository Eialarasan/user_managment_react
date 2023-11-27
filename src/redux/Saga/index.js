import { all,fork} from 'redux-saga/effects'
import loginWatcher from './LoginSaga'
import UserWatcher from './UserSaga'


export default function* sagaWatchers() {
    yield all([
        fork(loginWatcher),
        fork(UserWatcher),

    ])
}