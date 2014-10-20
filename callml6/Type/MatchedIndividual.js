var Modeler = require("../Modeler.js");
var className = 'TypeMatchedIndividual';

var TypeMatchedIndividual = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  nameinput: {
      type: "Typename",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "nameinput",
        type: "tns:name",
        "s:annotation": {
          "s:documentation": "XML Block containing the applicants name details. The name object contains details of title, forename, othernames and surname input"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    currentaddressinput: {
      type: "Typeaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "currentaddressinput",
        type: "tns:address",
        "s:annotation": {
          "s:documentation": "XML Block containing the applicants current address details. The address object contains details of the current address input"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    namematched: {
      type: "Typename",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "namematched",
        type: "tns:name",
        "s:annotation": {
          "s:documentation": "XML Block containing the matched name. The name object contains details of title, forename, othernames and surname matched"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    currentaddressmatched: {
      type: "Typeaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "currentaddressmatched",
        type: "tns:address",
        "s:annotation": {
          "s:documentation": "XML Block containing the matched address. The address object contains details of the current address matched"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    previousaddressinput: {
      type: "Typeaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "previousaddressinput",
        type: "tns:address",
        "s:annotation": {
          "s:documentation": "XML block containing requested address. The address object contains details of the previous address input"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    previousaddressmatched: {
      type: "Typeaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "previousaddressmatched",
        type: "tns:address",
        "s:annotation": {
          "s:documentation": "XML block containing the matched address. The address object contains details of the previous address matched"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMatchedIndividual;
Modeler.register(TypeMatchedIndividual, "TypeMatchedIndividual");
