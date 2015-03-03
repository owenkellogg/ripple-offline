var RippledClient = require('../build/rippled_client')

describe('submitting a raw transaction blob', function() {

  it('should make it into a ledger', function(done) {
    
    var client = new RippledClient('https://s1.ripple.com:51234')

    var hex = '1200002280000000240000043C201B00B7C36B614000000000002710684000000000009D2A732102D29E1ACEA956DA757638892662439E11BD8599BF1793FE00D568EFF127714CDC7446304402206C12B20B6B87EBB6E9B03F52643D312FE225EB879A148CE5693132C79538BD4C02201CB76ED8681A05ED1E5A1C1812DEF9E72B5F6954AE7E80365E72876111CA7C4A8114E908210CC9F41B1E23E005244BF1368B34809629831448F5A62B4C413EAB019E2DEF7D78394C5597D8D2'

    client.submitHex(hex)
      .then(function(response) {
        console.log('RESPONSE', response)
        done()
      })
      .error(function(error) {
        console.log('ERROR', error)
        done()
      })
  })

})
