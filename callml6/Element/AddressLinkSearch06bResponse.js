var Modeler = require("../Modeler.js");
var className = 'ElementAddressLinkSearch06bResponse';

var ElementAddressLinkSearch06bResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AddressLinkSearch06bResult: {
      type: "Typecallmlsearch6_1",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "AddressLinkSearch06bResult",
        type: "tns:callmlsearch6_1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAddressLinkSearch06bResponse;
Modeler.register(ElementAddressLinkSearch06bResponse, "ElementAddressLinkSearch06bResponse");
