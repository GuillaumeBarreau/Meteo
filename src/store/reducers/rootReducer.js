import { combineReducers } from 'redux';
import dataReducer from './data.reducer';

const STORE = {
    data: dataReducer
};

const rootReducer = combineReducers(
    STORE
);

export default rootReducer;