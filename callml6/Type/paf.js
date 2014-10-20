var Modeler = require("../Modeler.js");
var className = 'Typepaf';

var Typepaf = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  address: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "address",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Address"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 320
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    pafvalid: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "pafvalid",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Flag indicating whether PAF address is valid"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    currentaddress: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "currentaddress",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Flag indicating whether this is the current address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    usedindecision: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "usedindecision",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Flag indicating whether used in decision"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    }
	}, parentObj, json);
};

module.exports = Typepaf;
Modeler.register(Typepaf, "Typepaf");
