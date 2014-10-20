var Modeler = require("../Modeler.js");
var className = 'ElementSubsequentSearch06b';

var ElementSubsequentSearch06b = function(json, parentObj) {
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
    identities: {
      type: "Typenewidentities",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "identities",
        type: "tns:newidentities"
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

module.exports = ElementSubsequentSearch06b;
Modeler.register(ElementSubsequentSearch06b, "ElementSubsequentSearch06b");
