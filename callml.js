var CallML6Service = require('./callml6')

module.exports = function search (user, credentials, cb) {

  var searchRequest = new CallML6Service.CallML6Soap.Search06b()
  var searchDefinition = new CallML6Service.Types.callmlsearch6_1()
  var parameters = new CallML6Service.Types.CallMLParameters6()
  var primarySearch = new CallML6Service.Types.mlprimarysearch()

  // Add applicant
  var applicant = new CallML6Service.Types.applicant()
  var name = new CallML6Service.Types.name()
  name.title = 'Miss'
  name.forename = 'Julia'
  name.surname = 'Audi'
  applicant.name = name
  // Add address
  var address = new CallML6Service.Types.address()

  address.premiseno = '1'
  address.premisename = ''
  address.postcode = 'X99LF'
  // This is in the short address format
  //var InputAddresstype = new CallML6Service.Types.inputaddresstype()
  address.addressType = 'short'
  applicant.currentaddress = address

  primarySearch.minChecks = '2'

  //var Searchpurpose = new CallML6Service.Types.searchpurpose
  primarySearch.searchPurpose = 'MP'
  primarySearch.settledAccountMonths = '12'
  primarySearch.usebai = true
  primarySearch.useccj = true
  primarySearch.usesettledaccounts = true
  primarySearch.useukinvestors = true
  primarySearch.searchDirectors = true

  primarySearch.applicant = applicant

  parameters.primarysearch = primarySearch
  searchDefinition.parameters = parameters
  searchRequest.searchDefinition = searchDefinition

  CallML6Service.Settings.debugSoap = true

  // Got all the data ready -> send request and get response
  searchRequest.request(function(err, response) {

    cb (err, response)
    // console.error(err)
    // console.log(response)
  })
}