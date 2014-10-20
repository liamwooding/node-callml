var Modeler = require("../Modeler.js");
var className = 'Typeoverridedecision';

var Typeoverridedecision = function(json, parentObj) {
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
    newdecision: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "newdecision",
        nillable: true,
        "s:annotation": {
          "s:documentation": "The new decision"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 8
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

module.exports = Typeoverridedecision;
Modeler.register(Typeoverridedecision, "Typeoverridedecision");
