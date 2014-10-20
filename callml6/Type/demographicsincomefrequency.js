var Modeler = require("../Modeler.js");
var className = 'Typedemographicsincomefrequency';

var Typedemographicsincomefrequency = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicsincomefrequency: {
      type: "string",
      wsdlDefinition: {
        name: "demographicsincomefrequency",
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
              value: 11
            },
            {
              value: 12
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

module.exports = Typedemographicsincomefrequency;
Modeler.register(Typedemographicsincomefrequency, "Typedemographicsincomefrequency");
