var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfIdentity';

var TypeArrayOfIdentity = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  identity: {
      type: "Typeidentity",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "identity",
        nillable: true,
        type: "tns:identity"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfIdentity;
Modeler.register(TypeArrayOfIdentity, "TypeArrayOfIdentity");
