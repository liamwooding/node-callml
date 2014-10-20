var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfNoc';

var TypeArrayOfNoc = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  noc: {
      type: "Typenoc",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "noc",
        nillable: true,
        type: "tns:noc"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfNoc;
Modeler.register(TypeArrayOfNoc, "TypeArrayOfNoc");
