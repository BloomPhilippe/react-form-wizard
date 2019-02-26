import { createStore, combineReducers } from 'redux'
import setInputs from './Reducers/formReducer'

export default createStore(combineReducers({setInputs}))