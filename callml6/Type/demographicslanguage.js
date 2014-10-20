var Modeler = require("../Modeler.js");
var className = 'Typedemographicslanguage';

var Typedemographicslanguage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicslanguage: {
      type: "string",
      wsdlDefinition: {
        name: "demographicslanguage",
        "s:restriction": {
          base: "s:string",
          "s:enumeration": [
            {
              value: "CY"
            },
            {
              value: "EN"
            },
            {
              value: "GA"
            },
            {
              value: "GD"
            },
            {
              value: "YY"
            },
            {
              value: "YZ"
            }
          ]
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicslanguage;
Modeler.register(Typedemographicslanguage, "Typedemographicslanguage");
