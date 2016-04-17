import { createStore, combineReducers } from 'redux'

import { authToken } from '../auth/authToken'

const store = createStore(combineReducers({
  authToken
}))

export default store
