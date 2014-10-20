var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfTelephoneresult';

var TypeArrayOfTelephoneresult = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  telephoneresult: {
      type: "Typetelephoneresult",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "telephoneresult",
        nillable: true,
        type: "tns:telephoneresult"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfTelephoneresult;
Modeler.register(TypeArrayOfTelephoneresult, "TypeArrayOfTelephoneresult");
