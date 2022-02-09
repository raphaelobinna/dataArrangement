import { STORE_DATA_METRICS, SHOW_METRIC_PERIOD, SET_DATA, ERROR_502, ERROR_599, OTHER_ERROR } from '../types';

const DEFAULT_STATE = {
    metricData: {},
    metricPeriod: null,
    data: {},
    error502: '',
    error599: '',
    otherError: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case STORE_DATA_METRICS:
            return {
                ...state,
                metricData: action.payload,
            };

        case SHOW_METRIC_PERIOD:
            return {
                ...state,
                metricPeriod: action.payload,
            };

        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };

        case ERROR_502:
            return {
                ...state,
                error502: action.payload,
            };

        case ERROR_599:
            return {
                ...state,
                error599: action.payload,
            };

        case OTHER_ERROR:
            return {
                ...state,
                otherError: action.payload,
            };

        default:
            return state;
    }
};