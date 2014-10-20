var Modeler = require("../Modeler.js");
var className = 'Typeaddresslinksearch';

var Typeaddresslinksearch = function(json, parentObj) {
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
    navlinksearchid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "navlinksearchid",
        nillable: true,
        "s:annotation": {
          "s:documentation": "The navlink GUID"
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
    }
	}, parentObj, json);
};

module.exports = Typeaddresslinksearch;
Modeler.register(Typeaddresslinksearch, "Typeaddresslinksearch");
