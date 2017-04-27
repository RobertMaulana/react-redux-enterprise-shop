import { SIGNIN } from '../actions/constants'

let dataUsers = [];

const users = (state = dataUsers, action) => {
  if (action.payload != null) {
    if (action.payload.username === "maulana" && action.payload.password === "123") {
      state.push({
        username: action.payload.username,
        password: action.payload.password,
        auth: true
      })
    }else {
      state.push({
        username: action.payload.username,
        password: action.payload.password,
        auth: false
      })
    }
  }
  switch (action.type) {
    case SIGNIN:
      return state
    default:
      return state
  }
}

export default users
