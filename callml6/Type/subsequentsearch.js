var Modeler = require("../Modeler.js");
var className = 'Typesubsequentsearch';

var Typesubsequentsearch = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  originalsearchid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "originalsearchid",
        nillable: true,
        "s:annotation": {
          "s:documentation": "The original search GUID"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 38
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ids: {
      type: "TypeArrayOfIdentity",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "ids",
        type: "tns:ArrayOfIdentity",
        "s:annotation": {
          "s:documentation": "Collection of Identities"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typesubsequentsearch;
Modeler.register(Typesubsequentsearch, "Typesubsequentsearch");
