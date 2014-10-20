var WSDLCallMLService = require('./callml6')
var assert = require('assert')

function CallMLService (config) {
  if (!(this instanceof CallMLService)) return new CallMLService(config)
  assert(config, 'Missing service configuration: company, username, password')
  assert(config.company, 'Missing service configuration: company')
  assert(config.username, 'Missing service configuration: username')
  assert(config.password, 'Missing service configuration: password')
  this.config = config
}

CallMLService.prototype._addAuthHeader = function (req) {
  var config = this.config
  var soapHeader = req.soapHeader

  req.soapHeader =  function () {
    return soapHeader() +
      '<callcreditheaders xmlns="urn:callcredit.co.uk/soap:callcreditapi">' +
        '<company>' + config.company + '</company>' +
        '<username>' + config.username + '</username>' +
        '<password>' + config.password + '</password>' +
      '</callcreditheaders>'
  }
}

CallMLService.prototype.search = function (user, opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  var searchRequest = new WSDLCallMLService.CallML6Soap.Search06b()

  this._addAuthHeader(searchRequest)

  var searchDefinition = new WSDLCallMLService.Types.callmlsearch6_1()
  var parameters = new WSDLCallMLService.Types.CallMLParameters6()
  var primarySearch = new WSDLCallMLService.Types.mlprimarysearch()

  var applicant = new WSDLCallMLService.Types.applicant()
  var name = new WSDLCallMLService.Types.name()
  name.title = 'Miss'
  name.forename = 'Julia'
  name.surname = 'Audi'
  applicant.name = name

  var address = new WSDLCallMLService.Types.address()

  address.premiseno = '1'
  address.premisename = ''
  address.postcode = 'X99LF'
  // This is in the short address format
  //var InputAddresstype = new WSDLCallMLService.Types.inputaddresstype()
  address.addressType = 'short'
  applicant.currentaddress = address

  primarySearch.minChecks = '2'

  //var Searchpurpose = new WSDLCallMLService.Types.searchpurpose
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

  if (opts.debugSoap) {
    WSDLCallMLService.Settings.debugSoap = true
  }

  searchRequest.request(function (err, response) {
    cb(err, response)
  })
}

module.exports = CallMLService