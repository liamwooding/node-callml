var Modeler = require("../Modeler.js");
var className = 'Typenotice';

var Typenotice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  type: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "type",
        "s:annotation": {
          "s:documentation": "Notice type. C = Notice of Correction; D = Notice of Dispute"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 1
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
    refnum: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "refnum",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Reference number"
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
    noticedateraised: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "noticedateraised",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "Date notice raised"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    text: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "text",
        "s:annotation": {
          "s:documentation": "Notice text. Only applies to Notice of Correction"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 7800
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

module.exports = Typenotice;
Modeler.register(Typenotice, "Typenotice");
