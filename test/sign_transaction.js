const SignedTransaction = require('../build/signed_transaction')
const Source            = require('../build/source')
const Destination       = require('../build/destination')
const Secret            = require('../build/secret')
const lib               = require('ripple-lib')

describe('Signing a transaction offline', function() {

  it('should output a transaction blob', function(done) {
    var source = new Source()
    var destination = new Destination()
    var secret = new Secret()

    SignedTransaction.create(source, destination, secret)
      .then(function(signedTx) {

        console.log(signedTx)
        done()
      })
      .error(function(error) {
        console.log('ERROR', error);
        done()
      })
  })

  /*
  it('should convert a serialized hex to a transaction', function() {
    var blob = '12000022800000002400000439201B00B7A033614000000000002710684000000000002EE0732102D29E1ACEA956DA757638892662439E11BD8599BF1793FE00D568EFF127714CDC744730450221009D1BB7AAAE8090E6844EC4E3AF88DCCD9C2C29F4DC02C50AD1A8204269967811022030FC9C2B52965D28C906D63FF4548910FA121F3FEB5595913F367D7C77F99C9F8114E908210CC9F41B1E23E005244BF1368B34809629831448F5A62B4C413EAB019E2DEF7D78394C5597D8D2'
    var tx = lib.Transaction.from_json(new lib.SerializedObject(blob).to_json()) 
    console.log('TX', tx)
  })
  */
})

