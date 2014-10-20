var Modeler = require("../Modeler.js");
var className = 'Typedemographicsemploymentrecencytype';

var Typedemographicsemploymentrecencytype = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  demographicsemploymentrecencytype: {
      type: "string",
      wsdlDefinition: {
        name: "demographicsemploymentrecencytype",
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

module.exports = Typedemographicsemploymentrecencytype;
Modeler.register(Typedemographicsemploymentrecencytype, "Typedemographicsemploymentrecencytype");
