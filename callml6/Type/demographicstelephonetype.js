var Modeler = require("../Modeler.js");
var className = 'Typedemographicstelephonetype';

var Typedemographicstelephonetype = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicstelephonetype: {
      type: "string",
      wsdlDefinition: {
        name: "demographicstelephonetype",
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
              value: 16
            },
            {
              value: 17
            },
            {
              value: 18
            },
            {
              value: 19
            },
            {
              value: 20
            },
            {
              value: 21
            },
            {
              value: 22
            },
            {
              value: 23
            },
            {
              value: 24
            },
            {
              value: 25
            },
            {
              value: 26
            },
            {
              value: 27
            },
            {
              value: 28
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

module.exports = Typedemographicstelephonetype;
Modeler.register(Typedemographicstelephonetype, "Typedemographicstelephonetype");
