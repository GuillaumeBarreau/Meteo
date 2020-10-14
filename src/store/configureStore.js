import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];

const initalState = {};

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;