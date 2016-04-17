const authToken = (state: string = "", action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return action.authToken
    case REMOVE_AUTH_TOKEN:
      return ""
    default:
      return state
  }
}

const SET_AUTH_TOKEN = "SET_AUTH_TOKEN"
const REMOVE_AUTH_TOKEN = "REMOVE_AUTH_TOKEN"

const setToken = token => ({
  type: SET_AUTH_TOKEN,
  authToken: token
})

const removeToken = () => ({
  type: REMOVE_AUTH_TOKEN
})

export { authToken, setToken, removeToken }
