var Modeler = require("../Modeler.js");
var className = 'ElementChangePassword06bResponse';

var ElementChangePassword06bResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ChangePassword06bResult: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "ChangePassword06bResult",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    }
	}, parentObj, json);
};

module.exports = ElementChangePassword06bResponse;
Modeler.register(ElementChangePassword06bResponse, "ElementChangePassword06bResponse");
