var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfBairecord';

var TypeArrayOfBairecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  bairecord: {
      type: "Typebairecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "bairecord",
        nillable: true,
        type: "tns:bairecord"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfBairecord;
Modeler.register(TypeArrayOfBairecord, "TypeArrayOfBairecord");
