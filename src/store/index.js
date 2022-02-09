import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

//Chrome plugin can be commented out
let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

if (process.env.NODE_ENV === 'production') {
    devTools = a => a;
}


export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
),)