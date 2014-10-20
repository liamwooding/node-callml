var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfUkinvestorrecord';

var TypeArrayOfUkinvestorrecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ukinvestorrecord: {
      type: "Typeukinvestorrecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "ukinvestorrecord",
        nillable: true,
        type: "tns:ukinvestorrecord"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfUkinvestorrecord;
Modeler.register(TypeArrayOfUkinvestorrecord, "TypeArrayOfUkinvestorrecord");
