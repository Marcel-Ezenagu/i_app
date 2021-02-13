import { applyMiddleware,compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getUserReducer, userListReducer, userLoginReducer, userSignupReducer, userUpdateReducer } from './reducers/userReducers';
import { companyDetailsReducer, companyListReducer, createCompanyReducer } from './reducers/companyReducers';



const initialState = 
{
    userLogin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    companyList: {
        companies: localStorage.getItem('companies') ? JSON.parse(localStorage.getItem('companies')) : null
    },
}


const reducer = combineReducers({
    userList: userListReducer,
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    userUpdate: userUpdateReducer,
    getUser: getUserReducer,
    companyList: companyListReducer,
    company: createCompanyReducer,
    companyDetails: companyDetailsReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;