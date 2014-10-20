var Modeler = require("../Modeler.js");
var className = 'Typedemographicsexpenditure';

var Typedemographicsexpenditure = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  totaldebitcards: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "totaldebitcards",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Total number of cheque of debit cards linked directly to the customer&apos;s bank account"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    totalcreditcards: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "totalcreditcards",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Total number of credit or charge cards used to purchase goods and services on credit"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    monthlyunsecuredamount: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "monthlyunsecuredamount",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Monthly unsecured financial obligation owed to creditors"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsexpenditure;
Modeler.register(Typedemographicsexpenditure, "Typedemographicsexpenditure");
