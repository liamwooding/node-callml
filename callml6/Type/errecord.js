var Modeler = require("../Modeler.js");
var className = 'Typeerrecord';

var Typeerrecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  address: {
      type: "Typeaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "address",
        type: "tns:address",
        "s:annotation": {
          "s:documentation": {}
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    currentaddress: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "currentaddress",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates the address that has matched is a current address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    residents: {
      type: "TypeArrayOfResident",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "residents",
        type: "tns:ArrayOfResident",
        "s:annotation": {
          "s:documentation": "A collection of Resident matches"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    usedindecision: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "usedindecision",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if this record is used in the final decision"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    lorwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "lorwarning",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Length of Residency warning"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typeerrecord;
Modeler.register(Typeerrecord, "Typeerrecord");
