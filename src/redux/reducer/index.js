import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import UserReducers from './UserReducers';


export const reducers = combineReducers({
    LOGIN:LoginReducers,
    USERS:UserReducers,
});
