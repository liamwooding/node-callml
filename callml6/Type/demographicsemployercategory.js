var Modeler = require("../Modeler.js");
var className = 'Typedemographicsemployercategory';

var Typedemographicsemployercategory = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicsemployercategory: {
      type: "string",
      wsdlDefinition: {
        name: "demographicsemployercategory",
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
              value: 13
            },
            {
              value: 14
            },
            {
              value: 15
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

module.exports = Typedemographicsemployercategory;
Modeler.register(Typedemographicsemployercategory, "Typedemographicsemployercategory");
