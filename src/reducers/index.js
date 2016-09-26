import { combineReducers } from 'redux'
import main from './mainReducer'
import hasBack from './hasBackReducer'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  main,
  hasBack,
  routing: routerReducer
})
