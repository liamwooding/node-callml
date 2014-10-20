var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfCifasrecord';

var TypeArrayOfCifasrecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  cifasrecord: {
      type: "Typecifasrecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "cifasrecord",
        nillable: true,
        type: "tns:cifasrecord"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfCifasrecord;
Modeler.register(TypeArrayOfCifasrecord, "TypeArrayOfCifasrecord");
