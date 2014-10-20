var Modeler = require("../Modeler.js");
var className = 'ElementSearch06bResponse';

var ElementSearch06bResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  Search06bResult: {
      type: "Typecallmlsearch6_1",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "Search06bResult",
        type: "tns:callmlsearch6_1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSearch06bResponse;
Modeler.register(ElementSearch06bResponse, "ElementSearch06bResponse");
