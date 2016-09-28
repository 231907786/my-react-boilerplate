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
      if (action.error) {
        return {
          github: action.payload
        }
      }else {
        if (action.payload) {
          return {
            github: action.payload
          }
        }else {
          return {
            github: '加载中...'
          }
        }
      }
      break;
    default:
      return state
  }
}
