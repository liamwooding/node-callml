var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfIdparam';

var TypeArrayOfIdparam = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  idparam: {
      type: "Typeidparam",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "idparam",
        nillable: true,
        type: "tns:idparam"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfIdparam;
Modeler.register(TypeArrayOfIdparam, "TypeArrayOfIdparam");
