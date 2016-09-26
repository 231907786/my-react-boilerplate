import {LOCATION_CHANGE} from 'react-router-redux'

export default (state = false, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return action.payload.pathname !== '/'
      break;
    default:
      return state
  }
}
