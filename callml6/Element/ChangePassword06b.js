var Modeler = require("../Modeler.js");
var className = 'ElementChangePassword06b';

var ElementChangePassword06b = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  newPassword: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "newPassword",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    confirmationPassword: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "confirmationPassword",
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChangePassword06b;
Modeler.register(ElementChangePassword06b, "ElementChangePassword06b");
