var Modeler = require("../Modeler.js");
var className = 'Typesharedetails';

var Typesharedetails = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  acctypecode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "acctypecode",
        type: "s:string",
        "s:annotation": {
          "s:documentation": "The Account Type Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    acctypegroup: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "acctypegroup",
        "s:annotation": {
          "s:documentation": "The Account Type Group Description"
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
    accountstartdate: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "accountstartdate",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "The Account Start Date"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    settledaccount: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "settledaccount",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicate if the Share record has been settled in the last 12 months"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typesharedetails;
Modeler.register(Typesharedetails, "Typesharedetails");
