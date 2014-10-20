var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfResident';

var TypeArrayOfResident = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  resident: {
      type: "Typeresident",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "resident",
        nillable: true,
        type: "tns:resident"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfResident;
Modeler.register(TypeArrayOfResident, "TypeArrayOfResident");
