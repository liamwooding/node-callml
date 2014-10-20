var Modeler = require("../Modeler.js");
var className = 'Typejudgments';

var Typejudgments = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  judgment: {
      type: "Typejudgment",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "judgment",
        nillable: true,
        type: "tns:judgment"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typejudgments;
Modeler.register(Typejudgments, "Typejudgments");
