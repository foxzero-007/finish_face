const { default: axios } = require("axios")

function request(url, method, params) {
  return new Promise((resolve, reject) => {
      axios({
          method: method,
          url: url,
          data: params
      }).then(res => {
              resolve(res.data)
      }).catch(err => {
          reject(err)
          console.log(err)
      })
  })
}

module.exports = request