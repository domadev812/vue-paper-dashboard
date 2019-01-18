import axios from 'axios'

let baseUrl = process.env.BASE_URL

let config = {
  address: baseUrl,
  port: '',
  basePath: '',
  axiosConfig: {
    baseURL: baseUrl,
    headers: {},
    withCredentials: false,
    crossDomain: true,
  },
  getEndpointUrl () {
    return this.address + (this.basePath ? this.basePath : '')
  }
}

let $http = axios.create(config.axiosConfig)

let sendPost = (url, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    $http.post(url, payload)
      .then((handleSuccess) => {
        resolve(handleSuccess)
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}

let sendGet = (url, config) => {
  return new Promise((resolve, reject) => {
    $http.get(url, config)
      .then((handleSuccess) => {
        resolve(handleSuccess)
      })
      .catch((handleError) => {
        reject(handleError)
      })
  })
}



export default config

export { config }

export { sendPost }

export { sendGet }