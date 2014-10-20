var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfPaf';

var TypeArrayOfPaf = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  paf: {
      type: "Typepaf",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "paf",
        nillable: true,
        type: "tns:paf"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfPaf;
Modeler.register(TypeArrayOfPaf, "TypeArrayOfPaf");
