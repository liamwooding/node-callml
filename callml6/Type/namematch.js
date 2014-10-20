var Modeler = require("../Modeler.js");
var className = 'Typenamematch';

var Typenamematch = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  selected: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "selected",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Name match selected boolean indicator"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    forenamematch: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "forenamematch",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Name match forename match level"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    surnamematch: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "surnamematch",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Name match surname match level"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    middleinitialmatch: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "middleinitialmatch",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Name match middlename match level"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    residenceid: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "residenceid",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Residence ID"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    title: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "title",
        "s:annotation": {
          "s:documentation": "Title"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
            },
            "s:minLength": {
              value: 2
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    forename: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "forename",
        "s:annotation": {
          "s:documentation": "Forename"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
            },
            "s:minLength": {
              value: 1
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    othernames: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "othernames",
        "s:annotation": {
          "s:documentation": "Other Names"
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
    surname: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "surname",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Surname"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
            },
            "s:minLength": {
              value: 2
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    suffix: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "suffix",
        "s:annotation": {
          "s:documentation": "Suffix"
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
    sex: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "sex",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Sex. 0 for neutral, 1 for male, 2 for female"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    dateofbirth: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dateofbirth",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "Date of Birth"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typenamematch;
Modeler.register(Typenamematch, "Typenamematch");
