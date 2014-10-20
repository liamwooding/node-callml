var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfSharerecord';

var TypeArrayOfSharerecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  sharerecord: {
      type: "Typesharerecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "sharerecord",
        nillable: true,
        type: "tns:sharerecord"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfSharerecord;
Modeler.register(TypeArrayOfSharerecord, "TypeArrayOfSharerecord");
