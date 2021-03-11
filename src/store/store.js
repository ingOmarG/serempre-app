import { createStore, combineReducers } from 'redux';
import { appReducer } from '../reducers/appReducer';

const reducers = combineReducers({
    purchase: appReducer,
        
});
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);