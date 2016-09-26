const mainReducerDefaultState = {
  count: 0,
  github: ''
}
export default (state = mainReducerDefaultState, action) => {
  switch (action.type) {
    case 'PUSH':
      return {
        count: state.count + 1
      }
      break;
    case 'FETCHING':
      if (action.payload) {
        return {
          github: JSON.stringify(action.payload)
        }
      }else {
        return {
          github: 'Loading...'
        }
      }
      break;
    default:
      return state
  }
}
