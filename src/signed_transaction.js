var Remote = require('ripple-lib').Remote;
var Amount = require('ripple-lib').Amount;
var SerializedObject = require('ripple-lib').SerializedObject;

console.log('SO', SerializedObject)
var P      = require('bluebird')

export default class SignedTransaction {
  constructor() {
  }

  static create(source, destination, secret) {
    return new P((resolve, reject) => {
      var MY_ADDRESS = 'r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk';
      var MY_SECRET  = 'saE47pRZvRRtXzwryn9oFPfGh1iGx';
      var RECIPIENT  = 'rfemvFrpCAPc4hUa1v8mPRYdmaCqR1iFpe';
      var AMOUNT     = Amount.from_human('0.01XRP');

      var remote = new Remote({
        servers: [ 'wss://s1.ripple.com:443' ]
      })

      remote.connect(function() {
        console.log('connected')
        remote.setSecret(MY_ADDRESS, MY_SECRET);

        var transaction = remote.createTransaction('Payment', {
          account: MY_ADDRESS,
          destination: RECIPIENT,
          amount: AMOUNT
        });
        console.log('transaction', transaction)

        var hex = transaction.submit(function(err, res) {
          console.log(err, res)
          if (err) { return reject(err) }
          resolve(res)
          remote.disconnect()
        });

        console.log('HEX TX', hex)
      });
    })
  }

  toString() {
  }
}


