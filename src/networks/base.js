import store from '../store'

// TODO: move this string to file plist.info
const HOST = "https://www.medtalk.vn/app/v1/"

/*
 * TODO: Check for 401 and redirect to Login
 */
const GET = (path: string) => {
  const headers = getHeaders()
  return fetch(HOST + path, {
    method: 'GET',
    headers
  })
}

/*
 * TODO: Check for 401 and redirect to Login
 */
const POST = (path: string, body: object) => {
  const headers = getHeaders()
  return fetch(HOST + path, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })
}

/*
 * TODO: Check for 401 and redirect to Login
 */
const PUT = (path: string) => {
  const headers = getHeaders()
  return fetch(HOST + path, {
    method: 'PUT',
    headers
  })
}

/*
 * TODO: Check for 401 and redirect to Login
 */
const DELETE = (path: string) => {
  const headers = getHeaders()
  return fetch(HOST + path, {
    method: 'DELETE',
    headers
  })
}

const HEADERS = {
  'Accept': 'text/json',
  'Content-Type': 'text/json'
}

/*
 * TODO: Check for authToken and include it in headers if available
 */
const getHeaders = () => {
  let headers = HEADERS
  const token = store.getState().authToken
  if (token) {
    headers['Authorization'] = token
  }
  
  return headers
}

export { GET, POST, PUT, DELETE }
