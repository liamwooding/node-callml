var Modeler = require("../Modeler.js");
var className = 'Typedemographicsincometype';

var Typedemographicsincometype = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicsincometype: {
      type: "string",
      wsdlDefinition: {
        name: "demographicsincometype",
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

module.exports = Typedemographicsincometype;
Modeler.register(Typedemographicsincometype, "Typedemographicsincometype");
