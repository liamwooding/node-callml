var Modeler = require("../Modeler.js");
var className = 'Typedrivinglicence';

var Typedrivinglicence = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  idnumber: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "idnumber",
        nillable: true,
        type: "s:string",
        "s:annotation": {
          "s:documentation": "The driving licence number"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    surnamematch: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "surnamematch",
        nillable: true,
        type: "s:string",
        "s:annotation": {
          "s:documentation": "Indicates if the supplied surname matches the name in the driving licence number. Return value will be true, false or not supplied"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    initialmatch: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "initialmatch",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Indicates if the supplied initials match the initials in the driving licence number. Return value will be true, false or not supplied"
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
    othernamematch: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "othernamematch",
        type: "s:string",
        "s:annotation": {
          "s:documentation": "Indicates if a supplied middle initial matches the driving licence number. Return value will be true, false or not supplied"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dobdaymatch: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dobdaymatch",
        "s:annotation": {
          "s:documentation": "Indicates if the day supplied in the input Date of Birth matches the day in the Date of Birth in the Driving Licence number. Return value will be true, false or not supplied"
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
    dobmonthmatch: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dobmonthmatch",
        "s:annotation": {
          "s:documentation": "Indicates if the month supplied in the input Date of Birth matches the month in the Date of Birth in the Driving Licence number. Return value will be true, false or not supplied"
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
    dobyearmatch: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dobyearmatch",
        "s:annotation": {
          "s:documentation": "Indicates if the year supplied in the input Date of Birth matches the year in the Date of Birth in the Driving Licence number. Return value will be true, false or not supplied"
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
    }
	}, parentObj, json);
};

module.exports = Typedrivinglicence;
Modeler.register(Typedrivinglicence, "Typedrivinglicence");
