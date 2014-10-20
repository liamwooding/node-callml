var Modeler = require("../Modeler.js");
var className = 'Typeidcard';

var Typeidcard = function(json, parentObj) {
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
          "s:documentation": "The National Identity Card number"
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
          "s:documentation": "The first line of the machine readable identity card"
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
    machinereadableline2: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "machinereadableline2",
        "s:annotation": {
          "s:documentation": "The second line of the machine readable identity card"
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
    machinereadableline3: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "machinereadableline3",
        "s:annotation": {
          "s:documentation": "The third line of the machine readable identity card"
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
    surnamematch: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "surnamematch",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "True if the surname entered matches to the Identity Details entered"
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
          "s:documentation": "True if the forename entered matches to the Identity Details entered"
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
          "s:documentation": "True if the middle name entered matches to the Identity Details entered"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    nationality: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "nationality",
        "s:annotation": {
          "s:documentation": "The nationality of the identity card holder."
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 3
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dateofissue: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dateofissue",
        "s:annotation": {
          "s:documentation": "The National Identity Card date of issue"
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
    dobdaymatch: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dobdaymatch",
        "s:annotation": {
          "s:documentation": "True if the date of birth day entered matches to the Identity Details entered"
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
          "s:documentation": "True if the date of birth month entered matches to the Identity Details entered"
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
          "s:documentation": "True if the date of birth year entered matches to the Identity Details entered"
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
    validuntilok: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "validuntilok",
        "s:annotation": {
          "s:documentation": "True if the valid until date entered matches to the Identity Details entered"
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

module.exports = Typeidcard;
Modeler.register(Typeidcard, "Typeidcard");
