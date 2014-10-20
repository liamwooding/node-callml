var Modeler = require("../Modeler.js");
var className = 'Typedemographicsemail';

var Typedemographicsemail = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  type: {
      type: "Typedemographicsemailtype",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "type",
        type: "tns:demographicsemailtype",
        "s:annotation": {
          "s:documentation": "Email Type Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    address: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "address",
        "s:annotation": {
          "s:documentation": "Email address"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 100
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsemail;
Modeler.register(Typedemographicsemail, "Typedemographicsemail");
