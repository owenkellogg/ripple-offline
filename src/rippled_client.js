import Promise from 'bluebird'
import http from 'superagent'

export default class RippledClient {

  constructor(rpc_url) {
    this.rpc_url = rpc_url
  }
  
  submitHex(hex) {
    return new Promise((resolve, reject) => {
      http
        .post(this.rpc_url)
        .send({
          method: 'submit',
          params: [{
            tx_blob: hex
          }]
        })
        .end(function(error, response) {
          if (error) { return reject(error) }
          resolve(response.body)
        })
    })
  }
}
