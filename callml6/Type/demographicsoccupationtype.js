var Modeler = require("../Modeler.js");
var className = 'Typedemographicsoccupationtype';

var Typedemographicsoccupationtype = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicsoccupationtype: {
      type: "string",
      wsdlDefinition: {
        name: "demographicsoccupationtype",
        "s:restriction": {
          base: "s:string",
          "s:enumeration": [
            {
              value: 0
            },
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

module.exports = Typedemographicsoccupationtype;
Modeler.register(Typedemographicsoccupationtype, "Typedemographicsoccupationtype");
