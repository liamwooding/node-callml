var Modeler = require("../Modeler.js");
var className = 'Typedemographicsidentity';

var Typedemographicsidentity = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  type: {
      type: "Typedemographicsidentitytype",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "type",
        type: "tns:demographicsidentitytype",
        "s:annotation": {
          "s:documentation": "Identity Type Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsidentity;
Modeler.register(Typedemographicsidentity, "Typedemographicsidentity");
