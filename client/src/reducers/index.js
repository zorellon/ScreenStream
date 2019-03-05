import {combineReducers} from 'redux';
// Import and give more descriptive name
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';


export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});