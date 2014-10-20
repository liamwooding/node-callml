var Modeler = require("../Modeler.js");
var className = 'Typepicklistapplicant';

var Typepicklistapplicant = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  address: {
      type: "Typepicklistaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "address",
        nillable: true,
        type: "tns:picklistaddress",
        "s:annotation": {
          "s:documentation": "Contains address details. id attribute distinguishes between current and previous addresses &amp;&#35;40;id 1 = current&#41;"
        }
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typepicklistapplicant;
Modeler.register(Typepicklistapplicant, "Typepicklistapplicant");
