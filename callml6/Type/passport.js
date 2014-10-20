var Modeler = require("../Modeler.js");
var className = 'Typepassport';

var Typepassport = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  idnumber: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "idnumber",
        "s:annotation": {
          "s:documentation": "The passport number"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 50
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    machinereadableline1: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "machinereadableline1",
        "s:annotation": {
          "s:documentation": "The first machine-readable line"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 50
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    machinereadableline2: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "machinereadableline2",
        "s:annotation": {
          "s:documentation": "The second machine-readable line"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 50
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    surnamematch: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "surnamematch",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if the surname supplied in the input parameters matches the surname supplied in the passport details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    forenamematch: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "forenamematch",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if the forename supplied in the input parameters matches the forename supplied in the passport details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    middlenamematch: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "middlenamematch",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if the middlename supplied in the input parameters matches the middlename supplied in the passport details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    issuingcountry: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "issuingcountry",
        "s:annotation": {
          "s:documentation": "The country that issued the passport"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 91
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    nationality: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "nationality",
        "s:annotation": {
          "s:documentation": "The nationality of the passport holder"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 91
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    checkDigit1Match: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "checkDigit1Match",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if the first passport check digit is verified"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    checkDigit2Match: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "checkDigit2Match",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if the second passport check digit is verified"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    checkDigit3Match: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "checkDigit3Match",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if the third passport check digit is verified"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    checkDigit4Match: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "checkDigit4Match",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if the fourth passport check digit is verified"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    checkDigit5Match: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "checkDigit5Match",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if the fifth passport check digit is verified"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    dobdaymatch: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dobdaymatch",
        "s:annotation": {
          "s:documentation": "Indicates if the day supplied in the input Date of Birth matches the day in the Date of Birth in the passport number"
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
          "s:documentation": "Indicates if the month supplied in the input Date of Birth matches the month in the Date of Birth in the passport number"
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
          "s:documentation": "Indicates if the year supplied in the input Date of Birth matches the year in the Date of Birth in the passport number"
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
    expirydateok: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "expirydateok",
        "s:annotation": {
          "s:documentation": "Indicates if the supplied expiry date matches the expiry date given in the passport number"
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

module.exports = Typepassport;
Modeler.register(Typepassport, "Typepassport");
