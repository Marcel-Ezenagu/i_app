import Axios from '../services/axios';
import {
    GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS,
    USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS,
    USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS,
    USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS,
} from "../constants/userConstants";


export const listUsers = () => async (dispatch, getState) => {
    dispatch({
        type: USER_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get('/user/');
        
        dispatch({ type: USER_LIST_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        
        
        
    } catch (error) {
        dispatch({ type: USER_LIST_FAIL, payload: error.message });
        
    }
};



export const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post('/user/login', { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message : error.message,
        });       
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};
 
export const signup = (firstName, lastName, email, userName, phone, gender, password, profileImage, scope) =>
    async (dispatch) => {
        dispatch({ type: USER_SIGNUP_REQUEST, payload: { firstName, lastName, email, userName, phone, gender, password, profileImage, scope } });
        try {
            const { data } = await Axios.post('/user/signup', { firstName, lastName, email, userName, phone, gender, password, profileImage, scope });
            dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });

        } catch (error) {
            dispatch({
                type: USER_SIGNUP_FAIL,
                payload: 
                    error.response && error.response.data.message ? error.response.data.message : error.message
            })
            
        }
    }
  
export const userUpdate = (firstName, middleName, lastName, userName, phone,
    email, gender, profileImage, facebook, linkedIn, twitter
) =>
    async (dispatch) => {
        dispatch({
            type: USER_UPDATE_REQUEST, payload: {
                firstName, middleName, lastName, userName, phone,
                email, gender, profileImage, facebook, linkedIn, twitter
            }
        })
        try {
            const { data } = await Axios.patch(`/user/$:user_id`, {
                firstName, middleName, lastName, userName, phone,
                email, gender, profileImage, facebook, linkedIn, twitter
            })
            dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: USER_UPDATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            })
        }
    };


export const getUser = (email, password) => async (dispatch) => {
    dispatch({
        type: GET_USER_REQUEST
    });

    try {
        const { data } = await Axios.get('/user/:user_id', { email, password });
        dispatch({ type: GET_USER_SUCCESS, payload: data });
        localStorage.setItem('companyInfo', JSON.stringify(data));
        
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}