var Modeler = require("../Modeler.js");
var className = 'ElementSearch06b';

var ElementSearch06b = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  searchDefinition: {
      type: "Typecallmlsearch6_1",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "searchDefinition",
        type: "tns:callmlsearch6_1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSearch06b;
Modeler.register(ElementSearch06b, "ElementSearch06b");
