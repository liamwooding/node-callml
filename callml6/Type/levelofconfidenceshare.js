var Modeler = require("../Modeler.js");
var className = 'Typelevelofconfidenceshare';

var Typelevelofconfidenceshare = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  currentaddresslevel: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "currentaddresslevel",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "A numeric value representing the level of confidence in the SHARE data for the current address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    previousaddresslevel: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "previousaddresslevel",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "A numeric value representing the level of confidence in the SHARE data for the previous address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typelevelofconfidenceshare;
Modeler.register(Typelevelofconfidenceshare, "Typelevelofconfidenceshare");
