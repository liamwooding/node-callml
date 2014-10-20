var WSDLCallMLService = require('./callml6')
var assert = require('assert')

function CallMLService (config) {
  if (!(this instanceof CallMLService)) return new CallMLService(config)
  assert(config, 'Missing service configuration: url, company, username, password')
  assert(config.url, 'Missing service configuration: url')
  assert(config.company, 'Missing service configuration: company')
  assert(config.username, 'Missing service configuration: username')
  assert(config.password, 'Missing service configuration: password')
  this.config = config
}

CallMLService.prototype._setAuthHeader = function (req) {
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

CallMLService.prototype._setServiceUrl = function (req) {
  var url = this.config.url
  req.serviceUrl = function () {
    return url
  }
}

CallMLService.prototype.search = function (user, opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  var searchRequest = new WSDLCallMLService.CallML6Soap.Search06b()

  this._setServiceUrl(searchRequest)
  this._setAuthHeader(searchRequest)

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

  address.premiseno = 1
  address.premisename = ''
  address.postcode = 'X99LF'
  // This is in the short address format
  //var InputAddresstype = new WSDLCallMLService.Types.inputaddresstype()
  address.addresstype = 'short'
  applicant.currentaddress = address
  applicant.dateofbirth = '1910-01-01'

  primarySearch.minchecks = 2

  //var Searchpurpose = new WSDLCallMLService.Types.searchpurpose
  primarySearch.searchpurpose = 'MP'
  primarySearch.settledaccountmonths = 12
  primarySearch.usebai = true
  primarySearch.useccj = true
  primarySearch.usesettledaccounts = true
  primarySearch.useukinvestors = true
  primarySearch.searchdirectors = true

  primarySearch.applicant = applicant

  parameters.primarysearch = primarySearch
  searchDefinition.parameters = parameters
  searchRequest.searchDefinition = searchDefinition

  WSDLCallMLService.Settings.debugSoap = opts.debugSoap || false
  WSDLCallMLService.Settings.benchmark = opts.benchmark || false

  searchRequest.request(function (err, response) {
    cb(err, response)
  })
}

module.exports = CallMLService