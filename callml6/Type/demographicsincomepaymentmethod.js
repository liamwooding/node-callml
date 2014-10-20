var Modeler = require("../Modeler.js");
var className = 'Typedemographicsincomepaymentmethod';

var Typedemographicsincomepaymentmethod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicsincomepaymentmethod: {
      type: "string",
      wsdlDefinition: {
        name: "demographicsincomepaymentmethod",
        "s:restriction": {
          base: "s:string",
          "s:enumeration": [
            {
              value: 1
            },
            {
              value: 2
            },
            {
              value: 3
            },
            {
              value: 4
            },
            {
              value: 5
            },
            {
              value: 6
            },
            {
              value: 7
            },
            {
              value: 8
            },
            {
              value: 9
            },
            {
              value: 98
            },
            {
              value: 99
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

module.exports = Typedemographicsincomepaymentmethod;
Modeler.register(Typedemographicsincomepaymentmethod, "Typedemographicsincomepaymentmethod");
