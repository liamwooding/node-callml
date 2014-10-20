var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfErhistoryitem';

var TypeArrayOfErhistoryitem = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  erhistoryitem: {
      type: "Typeerhistoryitem",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "erhistoryitem",
        nillable: true,
        type: "tns:erhistoryitem"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfErhistoryitem;
Modeler.register(TypeArrayOfErhistoryitem, "TypeArrayOfErhistoryitem");
