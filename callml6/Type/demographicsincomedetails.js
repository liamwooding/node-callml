var Modeler = require("../Modeler.js");
var className = 'Typedemographicsincomedetails';

var Typedemographicsincomedetails = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  amount: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "amount",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Amount of income received according to frequency"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    type: {
      type: "Typedemographicsincometype",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "type",
        type: "tns:demographicsincometype",
        "s:annotation": {
          "s:documentation": "Income Type Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    paymentmethod: {
      type: "Typedemographicsincomepaymentmethod",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "paymentmethod",
        type: "tns:demographicsincomepaymentmethod",
        "s:annotation": {
          "s:documentation": "Income Payment Method Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    frequency: {
      type: "Typedemographicsincomefrequency",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "frequency",
        type: "tns:demographicsincomefrequency",
        "s:annotation": {
          "s:documentation": "Income Frequency Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsincomedetails;
Modeler.register(Typedemographicsincomedetails, "Typedemographicsincomedetails");
