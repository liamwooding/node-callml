var Modeler = require("../Modeler.js");
var className = 'TypeenAppMatch';

var TypeenAppMatch = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  enAppMatch: {
      type: "string",
      wsdlDefinition: {
        name: "enAppMatch",
        "s:restriction": {
          base: "s:string",
          "s:enumeration": [
            {
              value: "HM"
            },
            {
              value: "IM"
            },
            {
              value: "SM"
            },
            {
              value: "CM"
            },
            {
              value: "NM"
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

module.exports = TypeenAppMatch;
Modeler.register(TypeenAppMatch, "TypeenAppMatch");
