var Modeler = require("../Modeler.js");
var className = 'ElementOverrideDecision06b';

var ElementOverrideDecision06b = function(json, parentObj) {
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
    decision: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "decision",
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

module.exports = ElementOverrideDecision06b;
Modeler.register(ElementOverrideDecision06b, "ElementOverrideDecision06b");
