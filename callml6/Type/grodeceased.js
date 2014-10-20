var Modeler = require("../Modeler.js");
var className = 'Typegrodeceased';

var Typegrodeceased = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  matchtoregister: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "matchtoregister",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Flag to indicate whether or not the applicant matches to a name on the GRO deceased register"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    matchlevel: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "matchlevel",
        "s:annotation": {
          "s:documentation": "The match level.The match level achieved. I = Individual match, H = Household match, M = Multiple match"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 1
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dateofdeath: {
      type: "TypeDateOfDeathDate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dateofdeath",
        type: "tns:DateOfDeathDate"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dateofbirth: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dateofbirth",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "The date of birth as held on the GRO data."
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typegrodeceased;
Modeler.register(Typegrodeceased, "Typegrodeceased");
