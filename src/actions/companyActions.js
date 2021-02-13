import {
    COMPANY_DETAILS_FAIL, COMPANY_DETAILS_REQUEST, COMPANY_DETAILS_SUCCESS,
    COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS,
    CREATE_COMPANY_FAIL, CREATE_COMPANY_REQUEST, CREATE_COMPANY_SUCCESS
} from '../constants/companyConstants'

import Instance from '../services/axios';

export const listCompanies = () => async (dispatch) => {
    dispatch({
        type: COMPANY_LIST_REQUEST
    });
    try {
        const { data } = await Instance.get('/api/company/');
        dispatch({
            type: COMPANY_LIST_SUCCESS, payload: data
        });
        //localStorage.setItem('companyInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({ type: COMPANY_LIST_FAIL, payload: error.message })
    }
};


export const companyCreate = ( facebook,
    twitter,
    linkedIn,
    name,
    industry,
    companyInfo,
    location,
    titleOfIntern,
    fieldOfStudy,
    responsibilities,
    termsOfEngagement,
    stipend,
    participatoryMode) => async (dispatch) => {

        dispatch({
            type: CREATE_COMPANY_REQUEST, payload: {
                facebook,
                twitter,
                linkedIn,
                name,
                industry,
                companyInfo,
                location,
                titleOfIntern,
                fieldOfStudy,
                responsibilities,
                termsOfEngagement,
                stipend,
                participatoryMode
            }
        });
    try {
        const { data } = await Instance.post('api/company/', {facebook,
            twitter,
            linkedIn,
            name,
            industry,
            companyInfo,
            location,
            titleOfIntern,
            fieldOfStudy,
            responsibilities,
            termsOfEngagement,
            stipend,
            participatoryMode
                                                            });
        dispatch({ type: CREATE_COMPANY_SUCCESS, payload: data });
        localStorage.setItem('companyInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({ type: CREATE_COMPANY_FAIL, payload: error.message })
    }
    }


export const companyDetails = (companyId) => async (dispatch) => {
    dispatch({ type: COMPANY_DETAILS_REQUEST, payload: companyId });
    try {
        const { data } = Instance.get(`/api/company/${companyId}`);
        dispatch({ type: COMPANY_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: COMPANY_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
};