var Modeler = require("../Modeler.js");
var className = 'Typedemographicsperson';

var Typedemographicsperson = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  customerstatus: {
      type: "Typedemographicscustomerstatus",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "customerstatus",
        type: "tns:demographicscustomerstatus",
        "s:annotation": {
          "s:documentation": "Customer Applicant Status Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maritalstatus: {
      type: "Typedemographicsmaritalstatus",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "maritalstatus",
        type: "tns:demographicsmaritalstatus",
        "s:annotation": {
          "s:documentation": "Applicant&apos;s Marital Status Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    totaldependents: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "totaldependents",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Total number of dependent children"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    language: {
      type: "Typedemographicslanguage",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "language",
        type: "tns:demographicslanguage",
        "s:annotation": {
          "s:documentation": "Language Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    identity: {
      type: "Typedemographicsidentity",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "identity",
        type: "tns:demographicsidentity",
        "s:annotation": {
          "s:documentation": "Set of types of identity provided by the Applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsperson;
Modeler.register(Typedemographicsperson, "Typedemographicsperson");
