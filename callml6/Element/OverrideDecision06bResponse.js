var Modeler = require("../Modeler.js");
var className = 'ElementOverrideDecision06bResponse';

var ElementOverrideDecision06bResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  OverrideDecision06bResult: {
      type: "Typecallmlsearch6_1",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "OverrideDecision06bResult",
        type: "tns:callmlsearch6_1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOverrideDecision06bResponse;
Modeler.register(ElementOverrideDecision06bResponse, "ElementOverrideDecision06bResponse");
