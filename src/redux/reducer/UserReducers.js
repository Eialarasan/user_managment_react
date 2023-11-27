import Actions from '../action';

const initialState = {
    isLoading: false,
    error: null,
    userList: [],
    dashboard: [],
}

const UserReducers = (state = initialState, action) => {

    switch (action.type) {
        case Actions.USER_LIST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.USER_LIST_SUCCES: {
            return {
                ...state,
                isLoading: false,
                userList: action.data?.response,
                error: false
            };
        }
        case Actions.USER_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                userList: [],
                error: action.error,
            };
        }

        case Actions.ADD_USER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.ADD_USER_SUCCES: {
            return {
                ...state,
                isLoading: false,
                addUSER: action.data,
                error: false
            };
        }
        case Actions.ADD_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                addUser: undefined,
                error: action.error,
            };
        }

        case Actions.UPDATE_USER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.UPDATE_USER_SUCCES: {
            return {
                ...state,
                isLoading: false,
                updateUser: action.data,
                error: false
            };
        }
        case Actions.UPDATE_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                updateUser: undefined,
                error: action.error,
            };
        }
        case Actions.DELETE_USER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DELETE_USER_SUCCES: {
            return {
                ...state,
                isLoading: false,
                error: false
            };
        }
        case Actions.DELETE_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        }
        case Actions.DASHBOARD: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case Actions.DASHBOARD_SUCCES: {
            return {
                ...state,
                isLoading: false,
                dashboard:action.data?.response,
                error: false
            };
        }
        case Actions.DASHBOARD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        }

        default:
            return state;
    }
};

export const getUserList = (state) => state?.USERS?.userList
export const getDashboard = (state) => state?.USERS?.dashboard
export const getLoading = (state) => state?.USERS?.isLoading


export default UserReducers;
