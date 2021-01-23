
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { menuIndexReducer, IMenuIndex } from '../reducers/menuIndexReducer';

export interface IAppState {
    menuIndex : IMenuIndex
 }
 
 const rootReducer = combineReducers<IAppState>({
     menuIndex: menuIndexReducer
 });
 
 export default function reduxStore(): Store<IAppState> {
     const store = createStore(rootReducer, applyMiddleware(thunk));
     return store;
 }