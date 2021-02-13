import {
    COMPANY_DETAILS_FAIL, COMPANY_DETAILS_REQUEST, COMPANY_DETAILS_SUCCESS,
    COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS,
    CREATE_COMPANY_FAIL, CREATE_COMPANY_REQUEST, CREATE_COMPANY_SUCCESS
} from "../constants/companyConstants";

export const companyListReducer = (state = { companies: [], loading: true}, action) => {
    switch (action.type) {
        case COMPANY_LIST_REQUEST:
            return { loading: true };
        case COMPANY_LIST_SUCCESS:
            return { loading: false, companies: action.payload };
        case COMPANY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

export const createCompanyReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_COMPANY_REQUEST:
            return { loading: true };
        case CREATE_COMPANY_SUCCESS:
            return { loading: false, companyInfo: action.payload };
        case CREATE_COMPANY_FAIL:
            return { laoding: false, error: action.payload };
        default:
            return state;
    }
};

export const companyDetailsReducer = (state = { company: {}, loading: true }, action) => {
    switch (action.type) {
        case COMPANY_DETAILS_REQUEST:
            return { loading: true };
        case COMPANY_DETAILS_SUCCESS:
            return { loading: false, company: action.payload };
        case COMPANY_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}