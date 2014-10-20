var Modeler = require("../Modeler.js");
var className = 'Typedemographicsincome';

var Typedemographicsincome = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  primary: {
      type: "Typedemographicsincomedetails",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "primary",
        type: "tns:demographicsincomedetails",
        "s:annotation": {
          "s:documentation": "Applicant&apos;s Main Income details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    additional: {
      type: "Typedemographicsincomedetails",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "additional",
        type: "tns:demographicsincomedetails",
        "s:annotation": {
          "s:documentation": "Set of details for any additional income"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsincome;
Modeler.register(Typedemographicsincome, "Typedemographicsincome");
