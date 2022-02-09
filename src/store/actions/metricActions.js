import { STORE_DATA_METRICS, SHOW_METRIC_PERIOD, SET_DATA, ERROR_502, ERROR_599, OTHER_ERROR } from '../types';

export const storemetricAction = (payload) => {
    return async dispatch => {
        try {
            dispatch({ type: STORE_DATA_METRICS, payload });
        } catch (err) {
            console.log(err)
        }
    }
}

export const setMetricPeriodAction = (payload) => {
    return async dispatch => {
        try {
            dispatch({ type: SHOW_METRIC_PERIOD, payload });
        } catch (err) {
            console.log(err)
        }
    }
}

export const setMetricDataAction = (payload, period) => {
    return async dispatch => {
        try {
            switch (period) {
                case 'yesterday': 
                   dispatch({type: SET_DATA, payload : {
                    bookings: payload.data[0].bookings_current_yesterday,
                    searches: payload.data[0].searches_current_yesterday,
                    clicks: payload.data[0].clicks_current_yesterday,
                    avg_price: payload.data[0].avg_price_yesterday,
                   }})
                   dispatch(setMetricErrorAction(payload.errors_yesterday))
                    break;
    
                case 'days':
                   dispatch({ type: SET_DATA, payload: {
                    bookings: payload.data[0].bookings_current_last_3days,
                    searches: payload.data[0].searches_current_last_3days,
                    clicks: payload.data[0].clicks_current_last_3days,
                    avg_price: payload.data[0].avg_price_last_3days,
                   } })
                   dispatch(setMetricErrorAction(payload.errors_last_3days))
    
                    break;
    
                case 'hour':
                    dispatch({ type: SET_DATA, payload: {
                        bookings: payload.data[0].bookings_current_last_hour,
                        searches: payload.data[0].searches_current_last_hour,
                        clicks: payload.data[0].clicks_current_last_hour,
                        avg_price: payload.data[0].avg_price_last_hour
                    } })
                    dispatch(setMetricErrorAction(payload.errors_last_hour))
                    break;
    
                default:
                    break;
            }
        } catch (err) {
            console.log(err)
        }
    }

}

export const setMetricErrorAction = (payload) => {
    console.log('yruryry', payload)
    return async dispatch => {
        try {
            if (payload.length > 0) {
                payload.filter(e => {
                    switch (e.code) {
                        case 502:
                            dispatch({ type: ERROR_502, payload:  e.count })
                            break;
        
                        case 599:
                            dispatch({ type: ERROR_599, payload: e.count })
                            break;
    
                        
    
                        default:
                            dispatch({ type: OTHER_ERROR, payload: e.count })
                            break;
                    }
                })
            } else {
                dispatch({ type: ERROR_502, payload:'' })
                dispatch({ type: ERROR_599, payload: '' })
                dispatch({ type: OTHER_ERROR, payload: '' })
              
            }
           
        } catch (err) {
            console.log(err)
        }
    }
}