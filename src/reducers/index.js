import { combineReducers } from 'redux'
import checkinsReducers from './checkinsReducers' 

export default combineReducers({
    checkins: checkinsReducers
});