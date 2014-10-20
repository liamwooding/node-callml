var Modeler = require("../Modeler.js");
var className = 'Typecallmlsearch6_1';

var Typecallmlsearch6_1 = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  parameters: {
      type: "TypeCallMLParameters6",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "parameters",
        nillable: true,
        type: "tns:CallMLParameters6"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    results: {
      type: "TypeCallMLResults6",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "results",
        type: "tns:CallMLResults6"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typecallmlsearch6_1;
Modeler.register(Typecallmlsearch6_1, "Typecallmlsearch6_1");
