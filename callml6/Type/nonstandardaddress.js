var Modeler = require("../Modeler.js");
var className = 'Typenonstandardaddress';

var Typenonstandardaddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  address: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "address",
        "s:annotation": {
          "s:documentation": "The input address"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 400
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addresstype: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "addresstype",
        "s:annotation": {
          "s:documentation": "The type of non-standard address found, e.g. Prison, Mailbox etc"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 250
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typenonstandardaddress;
Modeler.register(Typenonstandardaddress, "Typenonstandardaddress");
