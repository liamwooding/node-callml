var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfErrecord';

var TypeArrayOfErrecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  errecord: {
      type: "Typeerrecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "errecord",
        nillable: true,
        type: "tns:errecord"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfErrecord;
Modeler.register(TypeArrayOfErrecord, "TypeArrayOfErrecord");
