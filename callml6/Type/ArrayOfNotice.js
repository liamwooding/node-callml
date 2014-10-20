var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfNotice';

var TypeArrayOfNotice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  notice: {
      type: "Typenotice",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "notice",
        nillable: true,
        type: "tns:notice"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfNotice;
Modeler.register(TypeArrayOfNotice, "TypeArrayOfNotice");
