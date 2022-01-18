import actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    loading: false,
    error: null
}

const users = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.GET_USERS_REQUESTED:
        case actionTypes.CREATE_USERS_REQUESTED:
        case actionTypes.DELETE_USERS_REQUESTED: 
        case actionTypes.UPDATE_USERS_REQUESTED:              
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_USERS_SUCCESS:
            return {
                   ...state,
                   loading: false, users: action.users.data
               }
        case actionTypes.CREATE_USERS_SUCCESS:
        case actionTypes.UPDATE_USERS_SUCCESS: 
        case actionTypes.GET_USERS_BYID_SUCCESS:
            console.log(action);   
            return {
                ...state,
                loading: false,
                editUser: action.users.data
            }
        case actionTypes.DELETE_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter((user) => user.id !== action.payload) 
            }           
        case actionTypes.GET_USERS_FAILED:
        case actionTypes.CREATE_USERS_FAILED:
        case actionTypes.DELETE_USERS_FAILED:
        case actionTypes.UPDATE_USERS_FAILED:
        case actionTypes.GET_USERS_BYID_FAILED:        
            return {
                ...state,
                loading: false, error: action.message
            }
        case actionTypes.GET_USERS_BYID_REQUESTED:
            return {
                ...state,
                loading: false,
                userId: action.payload
            }    
        default:
            return state;    
        }    
};

export default users;