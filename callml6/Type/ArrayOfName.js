var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfName';

var TypeArrayOfName = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  name: {
      type: "Typename",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "name",
        nillable: true,
        type: "tns:name"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfName;
Modeler.register(TypeArrayOfName, "TypeArrayOfName");
