const HOST = "https://www.medtalk.vn/app/v1/"

const GET = (path: string) => fetch(HOST + path, {
  method: 'GET',
  headers: {
    'Accept': 'text/json',
    'Content-Type': 'text/json'
  }
})

const POST = (path: string, body: object) => fetch(HOST + path, {
  method: 'POST',
  headers: {
    'Accept': 'text/json',
    'Content-Type': 'text/json'
  },
  body: JSON.stringify(body)
})

const PUT = (path: string) => fetch(HOST + path, {
  method: 'PUT',
  headers: {
    'Accept': 'text/json',
    'Content-Type': 'text/json'
  }
})

const DELETE = (path: string) => fetch(HOST + path, {
  method: 'DELETE',
  headers: {
    'Accept': 'text/json',
    'Content-Type': 'text/json'
  }
})

export { GET, POST, PUT, DELETE }
