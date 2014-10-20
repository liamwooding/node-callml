var Modeler = require("../Modeler.js");
var className = 'Typefurtherdetails';

var Typefurtherdetails = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  levelofconfidenceer: {
      type: "Typelevelofconfidenceer",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "levelofconfidenceer",
        type: "tns:levelofconfidenceer",
        "s:annotation": {
          "s:documentation": "Represents the level of confidence in the ER data"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    levelofconfidenceshare: {
      type: "Typelevelofconfidenceshare",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "levelofconfidenceshare",
        type: "tns:levelofconfidenceshare",
        "s:annotation": {
          "s:documentation": "Represents the level of confidence in the SHARE data"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    levelofconfidencedob: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "levelofconfidencedob",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "A numeric value representing the level of confidence in the Date of Birth data"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    levelofconfidenceccj: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "levelofconfidenceccj",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "A numeric value representing the level of confidence in the CCJ data"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    levelofconfidencebai: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "levelofconfidencebai",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "A numeric value representing the level of confidence in the BAI data"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    levelofconfidenceftse: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "levelofconfidenceftse",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "A numeric value representing the level of confidence in the FTSE data"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    drivinglicence: {
      type: "Typedrivinglicence",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "drivinglicence",
        type: "tns:drivinglicence",
        "s:annotation": {
          "s:documentation": "Contains Driving Licence information"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    passport: {
      type: "Typepassport",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "passport",
        type: "tns:passport",
        "s:annotation": {
          "s:documentation": "Contains Passport information"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    idcard: {
      type: "Typeidcard",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "idcard",
        type: "tns:idcard",
        "s:annotation": {
          "s:documentation": "XML block containing confirmatory details for a National Identity Card when entered as an identity document."
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typefurtherdetails;
Modeler.register(Typefurtherdetails, "Typefurtherdetails");
