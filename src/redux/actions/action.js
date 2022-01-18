import actionTypes from './actionTypes';

//GET USERS
export const getUsers = () => {
    return {
        type: actionTypes.GET_USERS_REQUESTED
    };
};

export const getUsersSuccess = (users) => {
    return {
        type: actionTypes.GET_USERS_SUCCESS,
        payload: users
    };
}

export const getUsersFailed = (error) => {
    return {
        type: actionTypes.GET_USERS_FAILED,
        payload: error
    };
}


//ADD USERS
export const createUsersRequested = (users) => {
    return {
        type: actionTypes.CREATE_USERS_REQUESTED,
        payload: users
    };
};

export const createUsersSuccess = () => {
    return {
        type: actionTypes.CREATE_USERS_SUCCESS,
    };
};
export const createUsersFailed = (error) => {
    return {
        type: actionTypes.CREATE_USERS_FAILED,
        payload: error
    };
};


//DELETE USERS
export const deleteUsersRequested = (id) => {
    return {
        type: actionTypes.DELETE_USERS_REQUESTED,
        payload: id
    };
};

export const deleteUsersSuccess = (id) => {
    return {
        type: actionTypes.DELETE_USERS_SUCCESS,
        payload: id
    };
};
export const deleteUsersFailed = (error) => {
    return {
        type: actionTypes.DELETE_USERS_FAILED,
        payload: error
    };
};

//EDIT USERS
export const updateUsersRequested = (formValue, id) => {
    return {
        type: actionTypes.UPDATE_USERS_REQUESTED,
        payload: {formValue, id}
    };
};

export const updateUsersSuccess = (users) => {
    return {
        type: actionTypes.UPDATE_USERS_SUCCESS,
        payload: users
    };
};
export const updateUsersFailed = (error) => {
    return {
        type: actionTypes.UPDATE_USERS_FAILED,
        payload: error
    };
};
export const getUsersById = (id) => {
    return {
        type: actionTypes.GET_USERS_BYID_REQUESTED,
        payload: id
    }
}