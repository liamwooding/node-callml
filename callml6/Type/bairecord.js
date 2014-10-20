var Modeler = require("../Modeler.js");
var className = 'Typebairecord';

var Typebairecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  courtname: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "courtname",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Court name"
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
    ordertype: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "ordertype",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Type of Insolvency"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 2
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
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
          "s:documentation": "First name"
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
    othernames: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "othernames",
        "s:annotation": {
          "s:documentation": "Other names"
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
        minOccurs: 0,
        maxOccurs: 1,
        name: "surname",
        "s:annotation": {
          "s:documentation": "Surname"
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
    address: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "address",
        "s:annotation": {
          "s:documentation": "The address information that this BAI record is recorded against"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 180
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    currentaddress: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "currentaddress",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    restrictiontype: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "restrictiontype",
        "s:annotation": {
          "s:documentation": "Bankruptcy restriction type"
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
    restrictionenddate: {
      type: "date",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "restrictionenddate",
        type: "s:dateTime",
        "s:annotation": {
          "s:documentation": "Bankruptcy restriction end date"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    bairestrictionenddate: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "bairestrictionenddate",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "Bankruptcy restriction end date"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    notices: {
      type: "TypeArrayOfNotice",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "notices",
        type: "tns:ArrayOfNotice",
        "s:annotation": {
          "s:documentation": "Notice details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    usedindecision: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "usedindecision",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates if this record is used in the final decision"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    }
	}, parentObj, json);
};

module.exports = Typebairecord;
Modeler.register(Typebairecord, "Typebairecord");
