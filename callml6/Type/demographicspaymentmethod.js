var Modeler = require("../Modeler.js");
var className = 'Typedemographicspaymentmethod';

var Typedemographicspaymentmethod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicspaymentmethod: {
      type: "string",
      wsdlDefinition: {
        name: "demographicspaymentmethod",
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

module.exports = Typedemographicspaymentmethod;
Modeler.register(Typedemographicspaymentmethod, "Typedemographicspaymentmethod");
