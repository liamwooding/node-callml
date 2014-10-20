var Modeler = require("../Modeler.js");
var className = 'Typedemographicstelephone';

var Typedemographicstelephone = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  type: {
      type: "Typedemographicstelephonetype",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "type",
        type: "tns:demographicstelephonetype",
        "s:annotation": {
          "s:documentation": "Telephone Type Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    std: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "std",
        "s:annotation": {
          "s:documentation": "Telephone STD Code"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 10
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    number: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "number",
        "s:annotation": {
          "s:documentation": "Telephone Number"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 20
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    extension: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "extension",
        "s:annotation": {
          "s:documentation": "Telephone Extension Number"
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
    }
	}, parentObj, json);
};

module.exports = Typedemographicstelephone;
Modeler.register(Typedemographicstelephone, "Typedemographicstelephone");
