var Modeler = require("../Modeler.js");
var className = 'ElementSubsequentSearch06bResponse';

var ElementSubsequentSearch06bResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  SubsequentSearch06bResult: {
      type: "Typecallmlsearch6_1",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "SubsequentSearch06bResult",
        type: "tns:callmlsearch6_1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSubsequentSearch06bResponse;
Modeler.register(ElementSubsequentSearch06bResponse, "ElementSubsequentSearch06bResponse");
