var Modeler = require("../Modeler.js");
var className = 'Typeidentity';

var Typeidentity = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  idtype: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "idtype",
        "s:annotation": {
          "s:documentation": "Type of identity document. Type code for the identity document. For example 1 &amp;&#35;40;Solicitors Letter&#41;, 5 (Passport), 6 (Driving License). For a complete list please contact Callcredit"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 2
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    idparams: {
      type: "TypeArrayOfIdparam",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "idparams",
        type: "tns:ArrayOfIdparam",
        "s:annotation": {
          "s:documentation": "Collection of input parameters relating to the identity document. Each idparam is a key value pair which will relate to the specific identity document"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typeidentity;
Modeler.register(Typeidentity, "Typeidentity");
