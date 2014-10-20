var Modeler = require("../Modeler.js");
var className = 'Typemailsort';

var Typemailsort = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  postcode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "postcode",
        "s:annotation": {
          "s:documentation": "Postcode"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 8
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    mailsortcode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "mailsortcode",
        "s:annotation": {
          "s:documentation": "The Mailsort code"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 5
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    mailvalid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "mailvalid",
        "s:annotation": {
          "s:documentation": "Indicates if the given mailsort code is valid. Possible return values are yes, no or not supplied"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 12
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

module.exports = Typemailsort;
Modeler.register(Typemailsort, "Typemailsort");
