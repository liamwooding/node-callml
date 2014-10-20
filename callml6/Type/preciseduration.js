var Modeler = require("../Modeler.js");
var className = 'Typepreciseduration';

var Typepreciseduration = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  years: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "years",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Years defined for duration"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    months: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "months",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Months defined for duration"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    days: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "days",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    }
	}, parentObj, json);
};

module.exports = Typepreciseduration;
Modeler.register(Typepreciseduration, "Typepreciseduration");
