var Modeler = require("../Modeler.js");
var className = 'Typedemographicsaccommodation';

var Typedemographicsaccommodation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  type: {
      type: "Typedemographicsaccommodationtype",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "type",
        type: "tns:demographicsaccommodationtype",
        "s:annotation": {
          "s:documentation": "Accommodation Type Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    propertyvalue: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "propertyvalue",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Estimate of how much the property is worth"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    mortgagebalance: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "mortgagebalance",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "The total amount of the mortgage still to be repaid"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    monthlyrental: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "monthlyrental",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "The price that the applicant pays the home&apos;s owner for using the home"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    residentialstatus: {
      type: "Typedemographicsresidentialstatus",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "residentialstatus",
        type: "tns:demographicsresidentialstatus",
        "s:annotation": {
          "s:documentation": "Residential Status Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsaccommodation;
Modeler.register(Typedemographicsaccommodation, "Typedemographicsaccommodation");
