var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfAddresslink';

var TypeArrayOfAddresslink = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  addresslink: {
      type: "Typeaddresslink",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "addresslink",
        nillable: true,
        type: "tns:addresslink"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfAddresslink;
Modeler.register(TypeArrayOfAddresslink, "TypeArrayOfAddresslink");
