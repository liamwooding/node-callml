var Modeler = require("../Modeler.js");
var className = 'Typedemographicsaccount';

var Typedemographicsaccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  sortcode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "sortcode",
        "s:annotation": {
          "s:documentation": "Bank sort code of main banking relationship"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 6
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
    accountnumber: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "accountnumber",
        "s:annotation": {
          "s:documentation": "Account number of main banking relationship"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 20
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
    timeatbank: {
      type: "Typeduration",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "timeatbank",
        type: "s:duration"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    paymentmethod: {
      type: "Typedemographicspaymentmethod",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "paymentmethod",
        type: "tns:demographicspaymentmethod",
        "s:annotation": {
          "s:documentation": "Account&apos;s Payment Method Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    financetype: {
      type: "Typedemographicsfinancetype",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "financetype",
        type: "tns:demographicsfinancetype",
        "s:annotation": {
          "s:documentation": "Finance/Non Finance Type Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsaccount;
Modeler.register(Typedemographicsaccount, "Typedemographicsaccount");
