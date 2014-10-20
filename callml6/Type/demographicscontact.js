var Modeler = require("../Modeler.js");
var className = 'Typedemographicscontact';

var Typedemographicscontact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  email: {
      type: "Typedemographicsemail",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "email",
        type: "tns:demographicsemail",
        "s:annotation": {
          "s:documentation": "Specific Email details for Applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    telephone: {
      type: "Typedemographicstelephone",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "telephone",
        type: "tns:demographicstelephone",
        "s:annotation": {
          "s:documentation": "Specific Telephone details for Applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicscontact;
Modeler.register(Typedemographicscontact, "Typedemographicscontact");
