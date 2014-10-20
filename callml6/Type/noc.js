var Modeler = require("../Modeler.js");
var className = 'Typenoc';

var Typenoc = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  refnum: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "refnum",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Reference number"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    datenoticeraised: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "datenoticeraised",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "Date notice raised"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    text: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "text",
        "s:annotation": {
          "s:documentation": "Notice text"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 7800
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    name: {
      type: "Typename",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "name",
        type: "tns:name",
        "s:annotation": {
          "s:documentation": "Name details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    address: {
      type: "Typeaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "address",
        type: "tns:address",
        "s:annotation": {
          "s:documentation": "Address details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typenoc;
Modeler.register(Typenoc, "Typenoc");
