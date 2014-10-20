var Modeler = require("../Modeler.js");
var className = 'Typetelephone';

var Typetelephone = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  std: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "std",
        type: "s:string",
        "s:annotation": {
          "s:documentation": "Std.The std code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    number: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "number",
        type: "s:string",
        "s:annotation": {
          "s:documentation": "Number.The telephone number"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typetelephone;
Modeler.register(Typetelephone, "Typetelephone");
