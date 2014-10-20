var Modeler = require("../Modeler.js");
var className = 'Typedemographicscustomerstatus';

var Typedemographicscustomerstatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicscustomerstatus: {
      type: "string",
      wsdlDefinition: {
        name: "demographicscustomerstatus",
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
              value: 10
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

module.exports = Typedemographicscustomerstatus;
Modeler.register(Typedemographicscustomerstatus, "Typedemographicscustomerstatus");
