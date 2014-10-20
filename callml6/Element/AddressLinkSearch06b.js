var Modeler = require("../Modeler.js");
var className = 'ElementAddressLinkSearch06b';

var ElementAddressLinkSearch06b = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  searchGuid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "searchGuid",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    linkID: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "linkID",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ipAddress: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "ipAddress",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    yourRef: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "yourRef",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAddressLinkSearch06b;
Modeler.register(ElementAddressLinkSearch06b, "ElementAddressLinkSearch06b");
