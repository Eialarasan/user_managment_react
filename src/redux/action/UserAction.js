export const USER_LIST = 'USER_LIST'
export const USER_LIST_SUCCES = 'USER_LIST_SUCCES'
export const USER_LIST_FAILURE = 'USER_LIST_FAILURE'

export const ADD_USER = 'ADD_USER'
export const ADD_USER_SUCCES = 'ADD_USER_SUCCES'
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE'

export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_SUCCES = 'UPDATE_USER_SUCCES'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCES = 'DELETE_USER_SUCCES'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

export const DASHBOARD = 'DASHBOARD'
export const DASHBOARD_SUCCES = 'DASHBOARD_SUCCES'
export const DASHBOARD_FAILURE = 'DASHBOARD_FAILURE'
export const UserList = (params, callback) => {
    return {
        type: USER_LIST,
        params,
        callback
    }

}
export const UsersListSuccess = (data) => {
    return {
        type: USER_LIST_SUCCES,
        data
    }

}
export const UsersListFailure = (data) => {
    return {
        type: USER_LIST_FAILURE,
        data
    }

}
export const AddUser = (params, callback) => {
    return {
        type: ADD_USER,
        params,
        callback
    }

}
export const AddUserSuccess = (data) => {
    return {
        type: ADD_USER_SUCCES,
        data
    }

}
export const AddUserFailure = (data) => {
    return {
        type: ADD_USER_FAILURE,
        data
    }

}

export const DeleteUser = (params, callback) => {
    return {
        type: DELETE_USER,
        params,
        callback
    }

}
export const DeleteUserSuccess = (data) => {
    return {
        type: DELETE_USER_SUCCES,
        data
    }

}
export const DeleteUserFailure = (data) => {
    return {
        type: DELETE_USER_FAILURE,
        data
    }

}

export const UpdateUser = (params, callback) => {
    return {
        type: UPDATE_USER,
        params,
        callback
    }

}
export const UpdateUserSuccess = (data) => {
    return {
        type: UPDATE_USER_FAILURE,
        data
    }

}
export const UpdateUserFailure = (data) => {
    return {
        type: UPDATE_USER_FAILURE,
        data
    }

}
export const GetDashBoard = (params, callback) => {
    return {
        type: DASHBOARD,
        params,
        callback
    }

}
export const GetDashBoardSuccess = (data) => {
    return {
        type: DASHBOARD_SUCCES,
        data
    }

}
export const GetDashBoardFailure = (data) => {
    return {
        type: DASHBOARD_FAILURE,
        data
    }

}


