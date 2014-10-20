var test = require('tape')
var CallML6 = require('../')

test('Test Julia Audi passes', function(t) {
  var applicant = {}
  var name = {}
  name.title = 'Miss'
  name.forename = 'Julia'
  name.surname = 'Audi'
  applicant.name = name

  var address = {}
  address.premiseno = '1'
  address.premisename = ''
  address.postcode = 'X99LF'
  address.addressType = 'short'
  applicant.currentaddress = address

  t.plan(2)

  CallML6(applicant, function (err, response) {
    t.error(err, 'No error when searching')
    t.ok(response, 'Response was not null')
  
    t.end()
  })
})
